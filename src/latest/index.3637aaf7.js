import {
  D as t,
  g as e,
  v as s,
  q as n,
  F as i,
  m as o,
  _ as r,
  A as a,
  a as c,
  b as l,
  B as d,
  d as u,
  e as h,
  y as p,
  c as g,
  L as f,
  f as m,
  h as y,
} from "./preact.f8a34c73.js";
function v(t, e, s) {
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
function b(t, e) {
  if (null == t) return {};
  var s,
    n,
    i = {},
    o = Object.keys(t);
  for (n = 0; n < o.length; n++) (s = o[n]), e.indexOf(s) >= 0 || (i[s] = t[s]);
  return i;
}
const w = {
    app: "Cdy1hg",
    tablature: "Cdyrh",
    tablatureFullscreen: "Cdyrh Cdy1j2",
    debug: "Cdy1xh",
    tos: "Cdyft",
    popupOverlay: "Cdy17e",
    footer: "Cdy18g",
    footerWithAds: "Cdy18g Cdy2gp",
    copyright: "Cdywb",
    rightSidebar: "Cdy2g1",
    appFree: "Cdy1hg Cdy160",
    appPlus: "Cdy1hg Cdy160",
  },
  S = !0,
  E = 27;
var I = t();
const x = m;
function k() {
  for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
    e[s] = arguments[s];
  const n = i(I),
    a = o({});
  return (
    x(
      () =>
        n.on("@changed", (t, s) => {
          e.some((t) => t in s) && a[1]({});
        }),
      []
    ),
    r(() => {
      const t = n.get(),
        s = { dispatch: n.dispatch, store: n };
      for (const n of e) s[n] = t[n];
      return s;
    }, [a[0]])
  );
}
function T(t) {
  for (
    var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
    i < e;
    i++
  )
    n[i - 1] = arguments[i];
  return function (e) {
    return s(t, Object.assign({}, e, k.apply(null, n)));
  };
}
const O = {};
function A(t, e) {
  (t.onload = function () {
    (this.onerror = this.onload = null), e(null, t);
  }),
    (t.onerror = function () {
      (this.onerror = this.onload = null),
        e(new Error("Failed to load " + this.src), t);
    });
}
function P(t, e) {
  t.onreadystatechange = function () {
    ("complete" !== this.readyState && "loaded" !== this.readyState) ||
      ((this.onreadystatechange = null), e(null, t));
  };
}
function L(t, e) {
  return (
    O[e] ||
      (O[e] = new Promise((s, n) => {
        !(function (t, e) {
          const s = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("script");
          (n.async = !0),
            (n.defer = !0),
            (n.src = t),
            ("onload" in n ? A : P)(n, e),
            n.onload || A(n, e),
            s.appendChild(n);
        })(t, (t) => {
          (window[e] = !t), t ? n(t) : s();
        });
      })),
    O[e]
  );
}
const C = ["signin", "signup", "subscribePlus", "updateCard", "help"];
function N() {
  return L(
    `https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`,
    "__LOADED_RECAPTCHA__"
  );
}
async function R(t) {
  try {
    return (
      window.grecaptcha || (await N()),
      await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: t })
    );
  } catch (t) {}
}
function j(t) {
  const e = i(I),
    n = t.href || t.to,
    o = t.onClick,
    r = a(
      (t) => {
        ((t) => !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey))(t) ||
          (t.preventDefault(), o && o(), e.dispatch("navigate", n));
      },
      [n, o]
    );
  return s("a", Object.assign({}, t, { href: n, onClick: r, to: null }));
}
const _ = {
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
    strokeBandmates: "x0tr x01vd",
  },
  M = {
    search: ["search"],
    signin: ["signup", "forgotpassword"],
    account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
    plus: ["subscribePlus"],
  };
function D(t) {
  let { id: e, route: n, url: o, songUrl: r, children: c, linkClick: l } = t;
  const d = i(I),
    u = e === n.page || (e in M && -1 !== M[e].indexOf(n.page)),
    h = e === n.page ? r : o,
    p = a(
      (t) => {
        t.preventDefault(), l && l(u), d.dispatch("navigate", h);
      },
      [h]
    );
  return s(
    "a",
    { href: h, onClick: p, id: `menu-${e}`, class: u ? _.itemActive : _.item },
    c
  );
}
const B = { page: "", isPanel: !1 },
  F = [
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
    ["/a/wa/howtoreadtab", { page: "howToReadTab", isPanel: !0 }],
    ["/tags", { page: "tags", isPanel: !1 }],
    ["/tags/", { page: "tags", isPanel: !1 }],
    ["/a/wsa/tags", { page: "tags", isPanel: !1 }],
    ["/a/wsa/tags/", { page: "tags", isPanel: !1 }],
    [
      /(\/|-)((drum|bass)-)?(tab|chords)-s(\d+)(t(\d+))?(\/r(\d+))?/i,
      (t) => {
        const [, , , e, s, n, , i, , o] = t;
        return "tab" === s
          ? {
              partInstrument: e || null,
              page: s,
              songId: +n,
              partId: i ? +i : null,
              revisionId: o ? +o : null,
              isPanel: !1,
            }
          : {
              page: s,
              songId: +n,
              chordsRevisionId: o ? +o : null,
              isPanel: !1,
            };
      },
    ],
    [
      /(\/|-|undefined)tabs-a(\d+)/i,
      (t) => ({ page: "artist", artistId: t[2] ? +t[2] : null, isPanel: !0 }),
    ],
    [
      /\/a\/wsa\/(.*)-tabs-t(\d+)/i,
      (t) => ({ page: "tag", isPanel: !1, name: t[1].replace(/-/, " ") }),
    ],
    [/tags\/(.*)/i, (t) => ({ page: "tag", isPanel: !1, name: t[1] })],
  ];
function $(t) {
  for (const [e, s] of F)
    if (e instanceof RegExp) {
      const n = t.match(e);
      if (n) return "function" == typeof s ? s(n) : s;
    } else if (t === e) return "function" == typeof s ? s.apply(null) : s;
  return B;
}
function U(t) {
  const e = {};
  return (
    t
      .split("&")
      .map((t) => t.split("=").map(decodeURIComponent))
      .forEach((t) => {
        e[t[0]] = t[1] || "";
      }),
    e
  );
}
function z(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function G(t, e, s) {
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
function H(t, e, s, n) {
  const i = { route: $(t.toLowerCase()) };
  e && e.length ? (i.query = U(e)) : z(s.query) || (i.query = {}),
    (function (t) {
      const e = t.page;
      return "tab" === e || "chords" === e || "tag" === e || "tags" === e;
    })(i.route) &&
      ((i.routeContent = i.route),
      i.query
        ? (i.queryContent = i.query)
        : z(s.queryContent) || (i.queryContent = {})),
    n.dispatch("route/change", i);
}
const W = (t) => {
  t.on("navigate", (e, s) => {
    let [n, i] = s.split("#")[0].split("?");
    const o = G(n, 0, e);
    return (
      o && (([n, i] = o.split("?")), (s = o)),
      history.pushState(null, "", s),
      H(n, i, e, t)
    );
  }),
    t.on("popstate", (e, s) => {
      let { pathname: n, search: i } = s;
      const o = i && i.substring(1),
        r = G(n, 0, e);
      return r
        ? (console.log("Found redirect to", r),
          history.replaceState(null, "", r),
          void t.dispatch("navigate", r))
        : H(n, o, e, t);
    }),
    t.on("route/change", (t, e) => e),
    window.addEventListener("popstate", () => {
      t.dispatch("popstate", {
        pathname: location.pathname,
        search: location.search,
      });
    });
};
function q(t) {
  const e = Object.keys(t)
    .filter((e) => t[e])
    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
    .join("&");
  return e.length ? `?${e}` : "";
}
const V = "ALL INSTRUMENTS",
  X = "GUITAR",
  Y = "BASS",
  J = "DRUMS",
  K = "ALL TUNINGS";
function Q(t) {
  const e = U(document.location.search.substring(1));
  t.length ? (e.pattern = t) : delete e.pattern,
    history.replaceState(
      null,
      "",
      `${document.location.pathname || "/"}${q(e)}`
    );
}
function Z(t) {
  const e = U(document.location.search.substring(1));
  t.length && "ALL INSTRUMENTS" !== t ? (e.inst = st(t)) : delete e.inst,
    history.replaceState(
      null,
      "",
      `${document.location.pathname || "/"}${q(e)}`
    );
}
function tt(t, e, s) {
  let n = s;
  return (
    e.length &&
      "ALL INSTRUMENTS" !== e &&
      (n = { pattern: s.pattern, inst: st(e) }),
    `${t}${q(n)}`
  );
}
function et(t) {
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
function st(t) {
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
function nt(t, e) {
  return q({
    pattern: t || void 0,
    inst:
      e && "ALL INSTRUMENTS" !== e.instrument && e.instrument
        ? st(e.instrument)
        : void 0,
  });
}
function it(t) {
  const { songs: e } = k("songs");
  return s(
    D,
    Object.assign({}, t, { url: `${t.url}${nt(e.pattern, e.filters)}` })
  );
}
function ot(t) {
  const { songs: e, dispatch: n } = k("songs"),
    i = `${t.url}${nt(e.pattern, e.filters)}`,
    o = "search" === t.route.page ? t.songUrl : i,
    r = a(
      (t) => {
        t.preventDefault(), n("navigate", o);
      },
      [o]
    );
  return s("a", Object.assign({}, t, { href: o, onClick: r, to: null }));
}
function rt(t) {
  const { favorites: e } = k("favorites");
  return s(
    D,
    Object.assign({}, t, { url: `${t.url}${nt(e.pattern, e.filters)}` })
  );
}
function at(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i, stroke: o },
  } = t;
  return s(
    "svg",
    { width: e || 18, height: n || 19, viewBox: "0 0 18 19", className: i },
    s("path", {
      className: o,
      strokeWidth: 1.5,
      strokeLinecap: "round",
      d: "M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42",
    })
  );
}
const ct =
    "M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z",
  lt = `${ct}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function dt(t) {
  let {
    width: e,
    height: n,
    viewbox: i,
    title: o = "Favorite",
    styles: { icon: r },
    id: a,
    state: c,
  } = t;
  const l = `title-${a || "favorite"}`;
  return s(
    "svg",
    {
      width: e || 29,
      height: n || 27,
      viewBox: i || "0 0 29 27",
      className: r,
      "data-icon": c,
      id: a,
      "aria-labelledby": l,
    },
    s("title", { id: l }, o),
    s("path", { d: "fill" === c ? ct : lt })
  );
}
function ut(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i, stroke: o },
  } = t;
  return s(
    "svg",
    { width: e || 29, height: n || 27, viewBox: "0 0 29 27", className: i },
    s("path", {
      d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
    }),
    s("path", {
      className: o,
      "stroke-width": 2,
      d: "M14.5 17v-15.5m-5 5l5 -5l5 5",
    })
  );
}
function ht(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i },
  } = t;
  return s(
    "svg",
    {
      width: e || 29,
      height: n || 27,
      viewBox: "0 0 1000 820",
      className: i,
      "aria-labelledby": "title-faq",
    },
    s("title", { id: "title-faq" }, "Frequently Asked Questions"),
    s("path", {
      d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z",
    })
  );
}
function pt(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i },
  } = t;
  return s(
    "svg",
    { width: e || 29, height: n || 27, viewBox: "0 0 29 27", className: i },
    s("path", {
      d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z",
    })
  );
}
const gt =
  "M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27";
function ft(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i, stroke: o },
  } = t;
  return s(
    "svg",
    {
      width: e || 18,
      height: n || 19,
      viewBox: "0 0 18 19",
      className: i,
      "aria-labelledby": "title-signin",
    },
    s("title", { id: "title-signin" }, "Sign In"),
    s("path", {
      className: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: gt,
    })
  );
}
function mt(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i, stroke: o },
  } = t;
  return s(
    "svg",
    {
      width: e || 19,
      height: n || 19,
      viewBox: "0 0 19 19",
      className: i,
      "aria-labelledby": "title-account",
    },
    s("title", { id: "title-account" }, "Account"),
    s("ellipse", {
      className: o,
      cx: 9.73,
      cy: 5.8,
      rx: 3.76,
      ry: 4.7,
      strokeWidth: 1.5,
    }),
    s("path", {
      className: o,
      strokeWidth: 1.5,
      d: "M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z",
    })
  );
}
const yt = t(null);
class vt extends c {
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
  static getDerivedStateFromProps(t, e) {
    let { in: s } = t;
    return s && "unmounted" === e.status ? { status: "exited" } : null;
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
        : ("entering" !== t && "entered" !== t) || (e = "exiting")
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
  updateStatus() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      e = arguments.length > 1 ? arguments[1] : void 0;
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
      (this.nextCallback = (s) => {
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
      : s(yt.Provider, { value: null }, this.props.children);
  }
}
function bt() {}
v(vt, "contextType", yt),
  (vt.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: bt,
    onEntering: bt,
    onEntered: bt,
    onExit: bt,
    onExiting: bt,
    onExited: bt,
  });
class wt extends c {
  constructor() {
    super(...arguments),
      v(this, "onEnter", (t, e) => {
        if (t) {
          const s = this.props.animationStyles[e ? "appear" : "enter"];
          this.removeClasses(t, "exit"), s && t.classList.add(s);
        }
        this.props.onEnter && this.props.onEnter(t);
      }),
      v(this, "onEntering", (t, e) => {
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
      }),
      v(this, "onEntered", (t, e) => {
        if (t) {
          const s =
            this.props.animationStyles[(e ? "appear" : "enter") + "Done"];
          this.removeClasses(t, e ? "appear" : "enter"),
            s && t.classList.add(s);
        }
        this.props.onEntered && this.props.onEntered(t);
      }),
      v(this, "onExit", (t) => {
        if (t) {
          const e = this.props.animationStyles.exit;
          this.removeClasses(t, "appear"),
            this.removeClasses(t, "enter"),
            e && t.classList.add(e);
        }
        this.props.onExit && this.props.onExit(t);
      }),
      v(this, "onExiting", (t) => {
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
      }),
      v(this, "onExited", (t) => {
        if (t) {
          const e = this.props.animationStyles.exitDone;
          this.removeClasses(t, "exit"), e && t.classList.add(e);
        }
        this.props.onExited && this.props.onExited(t);
      });
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
    return s(
      vt,
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
v(wt, "defaultProps", { timeout: 200 });
const St = (t) => t && t.props;
function Et(t, e) {
  const s = Object.create(null);
  return (
    t &&
      l(t).forEach((t) => {
        t && (s[t.key] = ((t) => (e && St(t) ? e(t) : t))(t));
      }),
    s
  );
}
function It(t, e, s) {
  return null != s[e] ? s[e] : t.props && t.props[e];
}
function xt(t, e, s) {
  const n = Et(t.children),
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
      const r = {};
      for (const t in e) {
        if (n[t])
          for (i = 0; i < n[t].length; i++) {
            const e = n[t][i];
            r[n[t][i]] = s(e);
          }
        r[t] = s(t);
      }
      for (i = 0; i < o.length; i++) r[o[i]] = s(o[i]);
      return r;
    })(e, n);
  return (
    Object.keys(i).forEach((o) => {
      const r = i[o];
      if (!St(r)) return;
      const a = o in e,
        c = o in n,
        l = e[o],
        u = St(l) && !l.props.in;
      !c || (a && !u)
        ? c || !a || u
          ? c &&
            a &&
            St(l) &&
            (i[o] = d(r, {
              onExited: s.bind(null, r),
              in: l.props.in,
              exit: It(r, "exit", t),
              enter: It(r, "enter", t),
            }))
          : (i[o] = d(r, { in: !1 }))
        : (i[o] = d(r, {
            onExited: s.bind(null, r),
            in: !0,
            exit: It(r, "exit", t),
            enter: It(r, "enter", t),
          }));
    }),
    i
  );
}
const kt = ["component", "childFactory"],
  Tt = Object.values || ((t) => Object.keys(t).map((e) => t[e]));
class Ot extends c {
  constructor(t) {
    super(t);
    const e = this.handleExited.bind(this);
    this.state = { handleExited: e, firstRender: !0 };
  }
  componentDidMount() {
    this.appeared = !0;
  }
  static getDerivedStateFromProps(t, e) {
    let { children: s, handleExited: n, firstRender: i } = e;
    return {
      children: i
        ? ((o = t),
          (r = n),
          Et(o.children, (t) =>
            d(t, {
              onExited: r.bind(null, t),
              in: !0,
              appear: It(t, "appear", o),
              enter: It(t, "enter", o),
              exit: It(t, "exit", o),
            })
          ))
        : xt(t, s, n),
      firstRender: !1,
    };
    var o, r;
  }
  handleExited(t, e) {
    const s = Et(this.props.children);
    t.key in s ||
      (t.props.onExited && t.props.onExited(e),
      this.setState((e) => {
        const s = Object.assign({}, e.children);
        return delete s[t.key], { children: s };
      }));
  }
  render() {
    const t = this.props,
      { component: e, childFactory: n } = t,
      i = b(t, kt),
      o = Tt(this.state.children).map(n);
    return (
      delete i.appear,
      delete i.enter,
      delete i.exit,
      s(
        yt.Provider,
        { value: { isMounting: !this.appeared } },
        e ? s(e, i, o) : s(u, null, o)
      )
    );
  }
}
v(Ot, "defaultProps", { component: null, childFactory: (t) => t });
const At = {
    spinner: "ki1vh",
    button: "ki1vh ki326",
    google: "ki1vh ki1hu",
    search: "ki1vh kibb",
    icon: "ki29b",
    revisions: "ki1vh ki1ny",
    songs: "ki1vh ki32k",
    songsInvisible: "ki1vh ki32k ki2jd",
  },
  Pt = (t) => {
    let {
      width: e,
      height: n,
      fill: i,
      className: o = At.spinner,
      style: r,
      id: a,
      iref: c,
    } = t;
    return s(
      "svg",
      {
        className: o,
        ref: c,
        id: a,
        width: e,
        height: n,
        style: r,
        viewBox: "25 25 50 50",
        "aria-labelledby": "spinner-title",
      },
      s("circle", { stroke: i, cx: "50", cy: "50", r: "20" })
    );
  };
function Lt() {
  return h("div", {
    className: "D0y2s5",
    children: s(Pt, { width: 50, height: 40, fill: "#128df6" }),
  });
}
function Ct(t, e, s, n) {
  const i = t.length,
    o = Math.ceil((i * s) / e),
    r = Math.ceil((i * s + n * o) / e);
  if (1 === r) return [t];
  const a = Math.ceil((e - n) / s);
  let c = 0;
  const l = [];
  for (let e = 0; e < r; e++) {
    const s = t.substr(c, a);
    let n;
    if (e !== r - 1) {
      const t = s.split(" ");
      n = s.lastIndexOf(t[t.length - 1]);
    }
    (c += n), l.push(s.substr(0, n).trim());
  }
  return l;
}
function Nt(t) {
  let { level: e, title: n, action: i, reason: o } = t;
  const { dispatch: r, screen: a, device: c } = k("screen", "device");
  if ("bot" === c.type) return;
  p(() => r("curiosity/event", { event: "Alert", Reason: o }), []);
  const l = (function (t) {
      switch (t) {
        case "error":
          return "B41py B431b";
        case "notice":
          return "B41py B41jo";
        default:
          return "B41py B4d2";
      }
    })(e),
    d = c.isPhone ? 0 : 190,
    u = a.viewport.width - d > 600 ? 600 : a.viewport.width - d,
    h = Ct(n, u, 9, 10),
    g = Ct(i, u, 7, 10),
    f =
      "undefined" == typeof btoa
        ? (t) => Buffer.from(t, "binary").toString("base64")
        : btoa;
  return s(
    "section",
    { className: l, role: "alert" },
    h.map((t) =>
      s("img", {
        height: 30,
        "aria-label": "title",
        alt: n,
        src:
          "data:image/svg+xml;base64," +
          f(
            `<svg xmlns='http://www.w3.org/2000/svg' width='${
              9 * t.length + 10
            }' height='30'>\n            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='20px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${t}</text>\n          </svg>`
          ),
      })
    ),
    i &&
      g.map((t) =>
        s("img", {
          height: 22,
          "aria-label": "action",
          alt: i,
          src:
            "data:image/svg+xml;base64," +
            f(
              `<svg xmlns='http://www.w3.org/2000/svg' width='${
                7 * t.length + 10
              }' height='22'>\n            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${t}</text>\n          </svg>`
            ),
        })
      )
  );
}
function Rt() {
  const [t] = g((t) => {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(t),
      console && console.error(t, t.stack);
  });
  return t
    ? h(Nt, {
        level: "error",
        reason: "lazy",
        title: "Failed to load page",
        action: "Please disable your ad blocker and check network connection",
      })
    : h(f, {
        fallback: h(Lt, {}),
        children: h(this.props.component, this.props),
      });
}
const jt = "undefined" == typeof window ? t() : void 0,
  _t = "undefined" == typeof window;
async function Mt(t) {
  let e =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
  if (!_t)
    return Promise.all(
      null == t
        ? void 0
        : t.map(
            (t) =>
              new Promise((s, n) => {
                if (document.querySelectorAll(`link[href="${t}"]`).length)
                  return void s(!0);
                const i = document.createElement("link"),
                  o = (
                    document.body || document.getElementsByTagName("head")[0]
                  ).childNodes,
                  r = o[o.length - 1];
                Object.assign(i, {
                  rel: "stylesheet",
                  href: t,
                  onerror: n,
                  onload: s,
                  media: e,
                }),
                  r.parentNode.insertBefore(i, r.nextSibling);
              })
          )
    );
}
const Dt = "undefined" == typeof window;
function Bt(t, e, s) {
  const n = y(
    Dt
      ? t
      : () => {
          return (s = t), (n = e), Promise.all([s(), Mt(n)]).then((t) => t[0]);
          var s, n;
        }
  );
  return function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Dt && i(jt)(e, s), h(n, t);
  };
}
const Ft = Bt(
    () => import("./AppChords.46446f73.js"),
    [
      "/static/latest/AppChords.732a3dedcd9bf66e.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/NetworkError.dce1088169437b6e.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
      "/static/latest/AppHeader.719d4aafa78a87d7.css",
      "/static/latest/DifficultyIndicator.0ed358f2fa5d03f3.css",
      "/static/latest/SWW.ee0869611439c289.css",
    ],
    []
  ),
  $t = Bt(
    () => import("./AppTags.97a879e5.js"),
    [
      "/static/latest/AppTags.e210aabd9d1f9d59.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/NetworkError.dce1088169437b6e.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
      "/static/latest/SWW.ee0869611439c289.css",
    ],
    []
  ),
  Ut = Bt(
    () => import("./AppTab.c5d83a6a.js"),
    [
      "/static/latest/AppTab.ade1931721959079.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/AppHeader.719d4aafa78a87d7.css",
      "/static/latest/NetworkError.dce1088169437b6e.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
      "/static/latest/DifficultyIndicator.0ed358f2fa5d03f3.css",
      "/static/latest/SWW.ee0869611439c289.css",
    ],
    []
  ),
  zt = Bt(
    () => import("./SongsPanel.8d77597b.js"),
    [
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/SongsPanel.module.1bb913ef9629a4f2.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
      "/static/latest/DifficultyIndicator.0ed358f2fa5d03f3.css",
      "/static/latest/SearchBox.4bb250a8e8d72c76.css",
      "/static/latest/Stub.840d865f8d59eb70.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Gt = Bt(
    () => import("./FavoritesPanel.e63d1e9d.js"),
    [
      "/static/latest/FavoritesPanel.efb5cddc1bd6afc0.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/SongsPanel.module.1bb913ef9629a4f2.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
      "/static/latest/DifficultyIndicator.0ed358f2fa5d03f3.css",
      "/static/latest/SearchBox.4bb250a8e8d72c76.css",
      "/static/latest/Stub.840d865f8d59eb70.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Ht = Bt(
    () => import("./ArtistPanel.24376b86.js"),
    [
      "/static/latest/SongsPanel.module.1bb913ef9629a4f2.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
      "/static/latest/DifficultyIndicator.0ed358f2fa5d03f3.css",
      "/static/latest/SearchBox.4bb250a8e8d72c76.css",
      "/static/latest/Stub.840d865f8d59eb70.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Wt = Bt(
    () => import("./SubmitPanel.d9817183.js"),
    [
      "/static/latest/SubmitPanel.5a7027bf0afd3d9a.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/FileInput.e0d0c5f987ab54e4.css",
      "/static/latest/Stub.840d865f8d59eb70.css",
    ],
    []
  ),
  qt = Bt(
    () => import("./TextPanel.7ca562ed.js"),
    [
      "/static/latest/TextPanel.b65687d362098683.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/index.8e38cca3af87a066.css",
    ],
    []
  ),
  Vt = Bt(
    () => import("./AboutPanel.4374f1d1.js"),
    [
      "/static/latest/AboutPanel.b9dfedcf8e1017f3.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Xt = Bt(
    () => import("./JobsPanel.b4188861.js"),
    [
      "/static/latest/JobsPanel.eb4a30bb93b1436b.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Yt = Bt(
    () => import("./HelpPanel.b23225e7.js"),
    [
      "/static/latest/HelpPanel.3f514880f9f0e312.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/TocPointer.4277edfc32523766.css",
      "/static/latest/SearchBox.4bb250a8e8d72c76.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/GenericPanel.module.b64de96bb14c5cbd.css",
      "/static/latest/SWW.ee0869611439c289.css",
    ],
    []
  ),
  Jt = Bt(
    () => import("./SigninPanel.adf8bdd5.js"),
    [
      "/static/latest/SigninPanel.e0cc530e3382936c.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Kt = Bt(
    () => import("./SignupPanel.b422c712.js"),
    [
      "/static/latest/SignupPanel.2771002910e80e35.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Qt = Bt(
    () => import("./AccountPanel.4ce5ba79.js"),
    [
      "/static/latest/AccountPanel.3c7bfe92a341cb51.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  Zt = Bt(
    () => import("./ForgotPasswordPanel.5c86b302.js"),
    [
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
      "/static/latest/GenericPanel.module.b64de96bb14c5cbd.css",
    ],
    []
  ),
  te = Bt(
    () => import("./ChangePasswordPanel.4d267e39.js"),
    [
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
      "/static/latest/GenericPanel.module.b64de96bb14c5cbd.css",
    ],
    []
  ),
  ee = Bt(
    () => import("./PlusPanel.545b7a68.js"),
    [
      "/static/latest/PlusPanel.dc882106fbc131f1.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
    ],
    []
  ),
  se = Bt(
    () => import("./PaymentPanel.c390e7b8.js"),
    [
      "/static/latest/PaymentPanel.35f19398be05822e.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/PaymentForm.8cf1e5a5786846f5.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
    ],
    []
  ),
  ne = Bt(
    () => import("./SubscriptionPanel.2aae1ece.js"),
    [
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/GenericPanel.module.b64de96bb14c5cbd.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
    ],
    []
  ),
  ie = Bt(
    () => import("./DeactivatePanel.d21fda42.js"),
    [
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/GenericPanel.module.b64de96bb14c5cbd.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
    ],
    []
  ),
  oe = Bt(
    () => import("./UpdateCardPanel.96c611de.js"),
    [
      "/static/latest/UpdateCardPanel.8cea0301116e649e.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/PaymentForm.8cf1e5a5786846f5.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/ContinueLink.15b61efe8be39218.css",
    ],
    []
  ),
  re = Bt(
    () => import("./HowToReadTabPanel.abe9c53b.js"),
    [
      "/static/latest/HowToReadTabPanel.d49728ef880a50b1.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Panel.082a2a1ec86da91d.css",
      "/static/latest/TocPointer.4277edfc32523766.css",
    ],
    []
  ),
  ae = {
    exitActive: "p2287",
    enterActive: "p22sz",
    enter: "p21o9",
    exit: "p22as",
  },
  ce = {
    exitActive: "w6o",
    enterActive: "w613o",
    enter: "w617j",
    exit: "w6ty",
  },
  le = (t) => t[0],
  de = (t) => t[1],
  ue = (t) => (11531520 * le(t)) / de(t),
  he = (t) => t / 11531520;
function pe(t, e) {
  return ((4 * e) / de(t)) * le(t);
}
const ge = 32,
  fe = 1024,
  me = 31;
function ye(t) {
  return 1024 === t;
}
function ve(t) {
  return t >= 24 && t <= 31;
}
function be(t) {
  return t >= 32 && t <= 39;
}
const we = 1,
  Se = 3,
  Ee = 4,
  Ie = 6,
  xe = 10,
  ke = 14,
  Te = 16,
  Oe = 17,
  Ae = 21;
function Pe(t) {
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
}
const Le = (t) =>
    t
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\/|\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, ""),
  Ce = function () {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    return Le(e.join("-"));
  },
  Ne = (t) => t.replace(/-+/g, "-").replace(/^-*|-$/g, ""),
  Re = (t) => t.replace(/^the-/g, "");
function je(t, e, s) {
  const n = t.views || 0;
  let i = !0;
  for (const o of e)
    if (t !== o) {
      if (s(o.instrumentId)) {
        const t = o.views || 0;
        if (t > n || (t === n && i)) return !0;
      }
    } else i = !1;
  return !1;
}
function _e(t) {
  return t.endsWith("-bass") || t.endsWith("-drum") ? t.slice(0, -4) : t;
}
function Me(t, e, s) {
  let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!t) return "/";
  let i = "",
    o = !0;
  if (t.tracks && void 0 !== e && !s) {
    let s = null;
    const r = t.tracks[e];
    r &&
      (ye(r.instrumentId)
        ? ((i = "-drum"), (s = ye))
        : be(r.instrumentId)
        ? ((i = "-bass"), (s = be))
        : ve(r.instrumentId) && (s = ve)),
      (o = n || !s || je(r, t.tracks, s));
  }
  let r = Ce(t.artist, t.title);
  o || (r = _e(r));
  const a = s ? `/r${s}` : "",
    c = o ? `t${e}` : "";
  return "/a/wsa/" + Re(Ne(r + i + `-tab-s${t.songId}${c}${a}`));
}
function De(t, e) {
  if (!t) return "/";
  const s = e ? `/r${e}` : "",
    n = Ce(t.artist, t.title);
  return "/a/wsa/" + Re(Ne(n + `-tab-s${t.songId}${s}`));
}
function Be(t, e) {
  let s = "",
    n = "";
  const i = t.tracks && t.tracks[e];
  i &&
    (ye(i.instrumentId)
      ? (n = "-drum")
      : be(i.instrumentId)
      ? (n = "-bass")
      : ve(i.instrumentId) || (s = `t${i.partId}`));
  let o = Ce(t.artist, t.title);
  return (o = _e(o)), "/a/wsa/" + Re(Ne(o + n + `-tab-s${t.songId}${s}`));
}
function Fe(t) {
  const e = Ce(t.artist || "");
  return "/a/wsa/" + Ne(e + `-tabs-a${t.artistId}`);
}
function $e(t) {
  if (!t) return "/";
  const e = Ce(t.artist, t.title);
  return "/a/wsa/" + Re(Ne(e + `-chords-s${t.songId}`));
}
var Ue, ze;
((ze = Ue || (Ue = {}))[(ze.TOO_LONG = 228)] = "TOO_LONG"),
  (ze[(ze.MIDI_FAILED = 229)] = "MIDI_FAILED"),
  (ze[(ze.NOT_FOUND = 404)] = "NOT_FOUND"),
  (ze[(ze.UNKNOWN = 500)] = "UNKNOWN");
const Ge = (t, e, s) => `v${t + ("next" === e ? 1 : 0)}-${s}`;
function He() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return "/tags" + (t ? `?page=${t}` : "");
}
function We(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return "/tags/" + t.replace(/ /g, "+") + (e ? `?page=${e}` : "");
}
function qe(t, e, s, n) {
  return "tab" === t.page
    ? Me(e.current, e.partId, e.revisionId)
    : "chords" === t.page
    ? $e(s.current)
    : "tag" === t.page
    ? n.content
      ? We(n.content.tag, n.content.page)
      : "/"
    : "tags" === t.page
    ? n.content
      ? He(n.content.page)
      : "/"
    : void 0;
}
function Ve(t) {
  let {
    width: e,
    height: n,
    styles: { icon: i, strokeBandmates: o },
  } = t;
  return s(
    "svg",
    { width: e || 40, height: n || 30, viewBox: "0 0 40 30", className: i },
    s("circle", { cx: 18, cy: 13.3, r: 1 }),
    s("circle", { cx: 25, cy: 13.3, r: 1 }),
    s("circle", { cx: 31.2, cy: 13.3, r: 1 }),
    s("path", {
      className: o,
      d: "M5.8 19.1c.2 1.6 0 5.2-1 6.9m5.7-13.7q1.8-1.1 2.3-2.5c.5-1.5 0-2.7-.1-3.3-.1-.7 2.3-.1 3.1.2.8.2 2.9.9 4.4.6 1.5-.4 2.8-1.4 2.6-1.5-1.1-.6-3.4-2-4.6-3.1-1.5-1.2-5-2.2-8.3-1.5-3.4.8-8 3.1-8.8 8.3Q.2 15.6 5.8 20M8 13.4c0-1.13-.43-1.67-1.3-1.6-1.3.2-1.3 1-1.2 1.3 0 .3 1.3 1.9 1.4 2.1.1.3-.3 1.57.5 1.8.6.3 1.4-.2 1.6-.8m12 1.2c.1.6.1 1.6.1 2.1s-.4 1.7-.4 2.4.6 1.7.2 2c-.6.7-1.9 1-3.8.4-1.9-.5-2.7-.6-3.4-.8-1.8-.6-2.3-1.3-2.9-3.2q-.5-1.3-.9-1.9m17.7-1c.1.6.1 1.6.1 2.1s-.4 1.7-.4 2.4.6 1.7.2 2c-.5.5-1.2.7-2.2.7m8.9-6.2c.1.6.1 1.6.1 2.1s-.4 1.7-.4 2.4.6 1.7.2 2c-.5.5-1.2.7-2.2.7M22 2.25c2.3.45 6.8.65 8.5 2.25 1.2 1.1 2.1 2.3 2.8 3.8.5.9.72 1.7.7 2.2 0 .7-.2 1.8 0 2.4.4 1 1.1 2.1 1.7 3.4.5 1.1.4 1.7-.4 1.7-.7 0-1.6 0-2.6.4M16 1.5c2.2.4 7 .3 8.7 1.9 1.2 1.1 2.05 2.4 2.6 4 .4.8.7 1.5.7 2 0 .7-.4 1.7 0 2.7.4 1 1.6 3.2 1.6 3.2.5 1.1.4 1.7-.4 1.7-.7 0-1.6 0-2.6.4m-5.8-10c.4.8.6 1.5.6 2 0 .7-.2 1.5-.1 2.2.4 1 1.6 3.2 1.7 3.7.5 1.1.4 1.7-.4 1.7-.7 0-1.6 0-2.6.4m-1-5q-.6-.5-2.9 0m2.4 7.5q1.5.1 2.5-.3",
    })
  );
}
const Xe = {
  search: zt,
  favorites: Gt,
  artist: Ht,
  plus: ee,
  submit: Wt,
  about: Vt,
  jobs: Xt,
  help: Yt,
  signin: Jt,
  signup: Kt,
  recoverpassword: te,
  changepassword: te,
  forgotpassword: Zt,
  account: Qt,
  cancelPlus: ne,
  deactivate: ie,
  updateCard: oe,
  subscribePlus: se,
  howToReadTab: re,
  privacy: qt,
  terms: qt,
  dnsmpd: qt,
};
function Ye(t) {
  t.preventDefault();
}
const Je = e((t) => {
    let { isSmallScreen: e } = t;
    const {
        dispatch: n,
        device: i,
        user: o,
        route: r,
        query: a,
        routeContent: c,
        meta: l,
        chords: d,
        tags: u,
        experiments: h,
      } = k(
        "device",
        "user",
        "route",
        "query",
        "routeContent",
        "meta",
        "chords",
        "tags",
        "experiments"
      ),
      { isPanel: g, page: f } = r,
      y = qe(c, l, d, u);
    p(
      () =>
        i.isDesktop &&
        (function (t) {
          if (!document.body) return;
          const e = window.innerWidth - document.body.clientWidth,
            s = t ? "0px" : `${e}px`;
          document.body.style.overflow = t ? "inherit" : "hidden";
          const n = document.getElementById("app");
          n && (n.style.marginRight = s);
          const i = document.getElementById("controls");
          i && (i.style.marginRight = s);
          const o = document.getElementById("fullscreen-controls");
          o && (o.style.marginRight = s);
          const r = document.getElementById("showroom");
          r && (r.style.paddingRight = s);
          const a = document.documentElement;
          a && a.style.setProperty("--page-overflow-gap", s);
        })(!g),
      [g, i.isDesktop]
    ),
      m(
        () =>
          (function (t, e) {
            document.body &&
              (t && C.includes(e)
                ? (document.body.classList.add("grecaptcha-visible"), N())
                : document.body.classList.remove("grecaptcha-visible"));
          })(g, f),
        [g, f]
      );
    let { isDesktop: v } = i,
      { hasPlus: b, isLoggedIn: w, profile: S } = o,
      E = ["ru", "ru-mo", "be", "uk"].some(
        (t) => -1 !== i.languages.indexOf(t)
      );
      b = true;
    let I = null;
    return (
      "on" === h.chat || "drop" === h.chat
        ? (I = "https://discord.gg/jNxcqbYKDg")
        : "off" === h.chat &&
          (I =
            "https://docs.google.com/forms/d/e/1FAIpQLSeygGPRA9TAbWr6JIyFqraDz9o1YN-cWkoRkZlKkQ9NyKkw-g/viewform"),
      s(
        "div",
        { className: _.pane },
        !e &&
          s(
            "nav",
            { className: _.float, id: "tablist" },
            s(
              ot,
              {
                id: "logo",
                className: _.logo,
                route: r,
                url: "/",
                songUrl: y,
                title: "Songsterr",
              },
              s("img", {
                src: "/static/media/main.866931f6.svg",
                width: 30,
                height: 36,
                alt: "Songsterr",
              }),
              s("img", {
                src: "/static/media/text.9cfe6bcf.svg",
                width: 62,
                height: 12,
                alt: "Songsterr",
              })
            ),
            s("div", { className: _.dividerEdge }),
            s(
              it,
              { id: "search", route: r, url: "/", songUrl: y },
              s(at, { styles: _, width: 30, height: 30 }),
              s("div", { className: _.text }, "Tabs")
            ),
            s(
              rt,
              { id: "favorites", route: r, url: "/a/wa/favorites", songUrl: y },
              s(dt, { styles: _ }),
              s("div", { className: _.text }, "Favorites")
            ),
            v &&
              s(
                D,
                { id: "submit", route: r, url: "/a/wa/submit", songUrl: y },
                s(ut, { styles: _ }),
                s("div", { className: _.text }, "Submit Tab")
              ),
            s("div", { className: _.dividerSmall }),
            I &&
              s(
                "a",
                {
                  id: "chat",
                  href: I,
                  target: "_blank",
                  onClick: () => {
                    n("curiosity/enteredExperiment", { experiment: "chat" });
                  },
                  className: _.item,
                },
                s(Ve, { styles: _ }),
                s("div", { className: _.text }, "╨í╨╛╨╛╨▒╤ë╨╡╤ü╤é╨▓╨╛")
              ),
            !b &&
              s(
                D,
                {
                  id: "plus",
                  route: r,
                  url: "/a/wa/plus",
                  songUrl: y,
                  linkClick: (t) => {
                    !t &&
                      n("curiosity/setConversionProps", {
                        "Last referring link": "Sidebar Button",
                      });
                  },
                },
                s(pt, { styles: _ }),
                s("div", { className: _.text }, "Songsterr Plus")
              ),
            s(
              D,
              { id: "help", route: r, url: "/a/wa/help", songUrl: y },
              s(ht, { styles: _ }),
              s("div", { className: _.text }, "Questions?")
            ),
            !w &&
              s(
                D,
                { id: "signin", route: r, url: "/a/wa/signin", songUrl: y },
                s(ft, { styles: _, width: 28, height: 29 }),
                s("div", { className: _.text }, "Sign In")
              ),
            w &&
              s(
                D,
                { id: "account", route: r, url: "/a/wa/account", songUrl: y },
                s(mt, { styles: _, width: 29, height: 29 }),
                s("div", { className: _.text }, S.name)
              ),
            s("div", { className: _.dividerSmall }),
            v &&
              E &&
              s(
                j,
                {
                  id: "menu-jobs",
                  to: "/a/wa/jobs",
                  className: _.jobs,
                  title: "Jobs at Songsterr",
                },
                s("img", {
                  src: "/static/media/jobs.30375c6a.svg",
                  width: 79.271,
                  height: 32,
                  alt: "Jobs",
                })
              )
          ),
        s(
          Ot,
          null,
          g &&
            s(
              wt,
              { animationStyles: ce, timeout: 400, key: "overlay" },
              s(j, {
                onTouchMove: Ye,
                className: _.overlay,
                id: "sidebar-overlay",
                to: y,
                title: "Back to tab",
                tabIndex: -1,
              })
            ),
          r.page in Xe &&
            s(
              wt,
              { animationStyles: ae, timeout: 400, key: r.page },
              s(
                "main",
                { id: `panel-${r.page}`, className: _.mainpanel },
                s(Rt, {
                  component: Xe[r.page],
                  route: r,
                  query: a,
                  user: o,
                  device: i,
                  songUrl: y,
                  isSmallScreen: e,
                  id: r.page,
                })
              )
            )
        )
      )
    );
  }),
  Ke = {
    exitActive: "Cir12y",
    enterActive: "Cir1tt",
    enter: "Cir29v",
    exit: "Cir1q8",
  };
function Qe(t) {
  return t ? "C8p2d0 C8pr1" : "C8p2d0 C8p1q";
}
class Ze extends c {
  constructor(t) {
    super(t),
      (this.state = {
        online: navigator.onLine,
        className: Qe(navigator.onLine),
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
    this.state.online &&
      this.setState(Object.assign({}, this.state, { message: null }));
  }
  updateOnlineStatus() {
    navigator.onLine &&
      (clearTimeout(this.hideIndicatorTimeout),
      (this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5e3))),
      this.setState({
        online: navigator.onLine,
        className: Qe(navigator.onLine),
        message: navigator.onLine ? "live" : "offline",
      });
  }
  render() {
    const { online: t, className: e, message: n } = this.state;
    let i = null;
    return (
      (!n && t) ||
        (i = s(
          wt,
          { animationStyles: Ke, timeout: 400 },
          s("div", { className: e }, n)
        )),
      s(Ot, null, i)
    );
  }
}
function ts(t, e) {
  return `/admin/resources/${t}/records/${e}/show`;
}
function es(t, e) {
  return `/a/wa/SongAdminTools/${t}?id=${e}`;
}
function ss(t) {
  return `https://www.songsterr.com${t}`;
}
function ns(t) {
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
const is = (t) => {
  window && !window.confirm("Are you sure?") && t.preventDefault();
};
function os(t) {
  let {
    meta: { songId: e },
    isAdmin: n,
    children: i,
  } = t;
  if (!n) return s("nav", { className: "Bdq1f0" }, i);
  const o = es("editSong", e),
    r = es("updateSrwr", e),
    a = es("rerender", e),
    c = es("generatePng", e),
    l = es("blockDueToLicenseRestriction", e);
  return s(
    "nav",
    { className: "Bdq1f0" },
    s(
      "a",
      { className: "Bdq1h0", href: window.location.href + "?redesign=off" },
      "SRWO"
    ),
    s("a", { href: o, target: "_blank" }, "Edit"),
    s("a", { href: r, target: "_blank", onClick: is }, "Update"),
    s("a", { href: a, target: "_blank", onClick: is }, "Rerender"),
    s("a", { href: l, target: "_blank", onClick: is }, "Block"),
    s("a", { href: c, target: "_blank" }, "Generate PNG"),
    i
  );
}
const rs = (t) => {
    let { onClick: e, id: n, width: i = 11, height: o = 11 } = t;
    return s(
      "button",
      { className: "C1p2za", onClick: e },
      s(
        "svg",
        {
          width: i,
          height: o,
          viewBox: "0 0 11 11",
          "aria-labelledby": `${n}-close`,
        },
        s("title", { id: `${n}-close` }, "Close"),
        s("path", { d: "M1 1l9 9m-9 0l9-9" })
      )
    );
  },
  as = "z44l z42qo",
  cs = "z44l z430w",
  ls = "z44l z41yi",
  ds = "z44l z41rt",
  us = "z44l z42gf",
  hs = "z44l z4a1 z41vb",
  ps = "z44l z42qx",
  gs = "z4y3",
  fs = "z41pi",
  ms = {
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
    addAnnotation: "z44l z4a1 z424y z41xe z4ls z4y1",
    removeAnnotation: "z44l z41yi z41xe z42ma",
    buttonBig: "z44l z42qx",
    greenHighlight: "z4y3",
    orangeHighlight: "z41pi",
  },
  ys = "hidden",
  vs = "intro",
  bs = "questions",
  ws = "not_chosen",
  Ss = "email",
  Es = "feeback",
  Is = "start",
  xs = "instructions",
  ks = "restart",
  Ts = "survey",
  Os = "farewell";
function As() {
  const { dispatch: t, screener: e, ut: n } = k("screener", "ut"),
    i = e.active;
  if (!i || "hidden" !== n.stage) return null;
  const o = a(() => {
      t("screener/dismiss", i);
    }, [i]),
    r = a(() => {
      t("screener/accept", i);
    }, [i]);
  return s(
    "aside",
    { className: "B9v2h1", id: "screener" },
    s(rs, { onClick: o, id: "screener" }),
    s("h2", { className: "B9vl" }, i.title),
    s("p", { className: "B9v21x" }, i.body),
    i.usertest
      ? s(
          "button",
          { className: "z44l z4a1 z424y B9v2hx", onClick: r },
          i.button
        )
      : s(
          "a",
          {
            className: "z44l z4a1 z424y B9vhl",
            href: i.link,
            onClick: r,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          i.button
        )
  );
}
function Ps(t) {
  return "android" === t.toLowerCase();
}
function Ls(t) {
  return "ios" === t.toLowerCase();
}
function Cs(t) {
  return (
    !(!t.isTablet || "iOS" !== t.os) ||
    (t.isDesktop && "Mac OS X" === t.os && "ontouchstart" in window)
  );
}
const Ns = (t) => {};
function Rs(t, e, s) {
  let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  return Ps(t)
    ? `https://play.google.com/store/apps/details?id=com.songsterr&referrer=utm_source%3D${s}${
        n.songId ? `%26tab_id%3D${n.songId}` : ""
      }`
    : `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${s}`;
}
function js(t) {
  const { dispatch: e, device: n, experiments: i } = k("device", "experiments"),
    { source: o } = t,
    r = t.os || n.os,
    c = t.extra || {},
    l = t.attrs || {},
    d = Rs(r, i, o, c),
    u = a(() => {
      t.onClick && t.onClick(),
        e("player/togglePlay", !1),
        e("curiosity/google", {
          category: "Showroom",
          action: `Clicked on ${Ps(r) ? "Google Play" : "App Store"} link`,
        });
    }, []);
  return s(
    "a",
    Object.assign({}, l, {
      href: d,
      onClick: u,
      rel: "noopener noreferrer",
      target: "_blank",
    }),
    t.children
  );
}
const _s = {
    exitActive: "e81fc",
    enterActive: "e8v0",
    enter: "e8qv",
    exit: "e8ai",
  },
  Ms = { animationStyles: _s },
  Ds = () => {
    const { dispatch: t, promo: e, device: n } = k("promo", "device"),
      i = e.active;
    let o = {
      title: "Struggling to figure out\nthe rhythm of this fragment?",
      cta: n.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
      source: "slowdown_promo_popup",
      link: "Slowdown Promo Popup",
      context: void 0,
    };
    switch (e.active) {
      case "loop":
        o = {
          title: "Want to nail this fragment?",
          cta: n.isPhone
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
          cta: n.isPhone ? "Remove it in our app!" : "Remove it on Plus!",
          source: "noads_promo_popup",
          link: "No Ads Promo Popup",
          context: "No Ads",
        };
        break;
      case "print":
        o = {
          title: "Prefer to read and\nmarkup on paper?",
          cta: n.isPhone
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
          cta: n.isPhone
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
          cta: n.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
          source: "solo_promo_popup",
          link: "Solo Promo Popup",
          context: "Solo",
        };
        break;
      case "retune":
        o = {
          title: "DonΓÇÖt want to retune the guitar?",
          cta: n.isPhone
            ? "Pitch shift the tab in our app!"
            : "Pitch shift the tab on Plus!",
          source: "retune_promo_popup",
          link: "Retune Promo Popup",
          context: "Retune",
        };
    }
    const r = () => {
      t("curiosity/setConversionProps", { "Last referring link": o.link }),
        t("promo/dismiss");
    };
    return s(
      Ot,
      null,
      i &&
        s(
          wt,
          Object.assign({}, Ms, { key: "popup" }),
          s(
            "aside",
            { className: "Ei1by", id: "promo" },
            s("h2", { className: "Ei2cl" }, o.title),
            s("p", { className: "Ei2zd" }, o.cta),
            s(
              "div",
              { className: "Ei2we" },
              !n.isPhone &&
                s(
                  j,
                  { to: "/a/wa/plus", className: ms.buttonGreen, onClick: r },
                  "Tell me more!"
                ),
              n.isPhone &&
                s(
                  js,
                  {
                    source: o.source,
                    onClick: r,
                    attrs: { className: ms.buttonGreen },
                  },
                  Ps(n.os) ? "Open Google Play" : "Open App Store"
                ),
              s(
                "a",
                { onClick: () => t("promo/dismiss"), className: ms.buttonLink },
                "No, thanks"
              )
            ),
            s(
              "a",
              {
                onClick: () => t("promo/unsubscribe"),
                className: ms.buttonPromoUnsubscribe,
              },
              "DonΓÇÖt show ads like that"
            )
          )
        )
    );
  },
  Bs = Bt(
    () => import("./UTRecorder.2a20232f.js"),
    [
      "/static/latest/UTRecorder.0420d2af021d9053.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
    ],
    []
  );
function Fs() {
  const { ut: t } = k("ut");
  if ("hidden" === t.stage) return;
  const [e] = g((t) => {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(t),
      console && console.error(t);
  });
  return e ? null : h(f, { fallback: void 0, children: h(Bs, this.props) });
}
function $s(t) {
  return t;
}
let Us;
const zs = () => {
  if ("indexedDB" in window)
    try {
      const t = window.indexedDB.open("data", 1);
      (t.onupgradeneeded = () => {
        try {
          const e = t.result;
          e &&
            ((e.onerror = (e) => {
              console.error(t.error), e.preventDefault();
            }),
            e.createObjectStore("revisions"));
        } catch (t) {
          console.error(t);
        }
      }),
        (t.onerror = (e) => {
          console.error(t.error), e.preventDefault();
        }),
        (t.onblocked = (t) => {
          console.error("Request to indexedDB was blocked!"),
            t.preventDefault();
        }),
        (t.onsuccess = () => {
          function e(t) {
            t.preventDefault(), (Us = void 0);
          }
          (Us = t.result), (Us.onabort = e), (Us.onclose = e);
        });
    } catch (t) {
      console.error(t);
    }
};
zs();
const Gs = (t, e) =>
  new Promise((s, n) => {
    try {
      const i = Us.transaction("revisions", t);
      (i.oncomplete = () => s()),
        (i.onerror = () => n(i.error)),
        e(i.objectStore("revisions"));
    } catch (t) {
      try {
        window.indexedDB.deleteDatabase("data");
      } catch (t) {}
      n(t);
    }
  });
async function Hs(t) {
  if (!Us) return zs(), null;
  try {
    let e = null;
    return (
      await Promise.race([
        Gs("readonly", (s) => (e = s.get(t))),
        new Promise((t) => setTimeout(t, 100)),
      ]),
      e && e.result
    );
  } catch (t) {
    return console.error(t), null;
  }
}
async function Ws(t, e) {
  if (!Us) return zs(), null;
  try {
    await Promise.race([
      Gs("readwrite", (s) => s.put(e, t)),
      new Promise((t) => setTimeout(t, 200)),
    ]);
  } catch (t) {
    return console.error(t), null;
  }
}
class qs extends Error {
  constructor(t, e) {
    for (
      var s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), i = 2;
      i < s;
      i++
    )
      n[i - 2] = arguments[i];
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, qs),
      (this.name = "ValidationError"),
      (this.reasons = t),
      (this.message = e || "Form validation failed");
  }
}
class Vs extends qs {
  constructor(t, e) {
    for (
      var s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), i = 2;
      i < s;
      i++
    )
      n[i - 2] = arguments[i];
    super(t, e, ...n),
      Error.captureStackTrace && Error.captureStackTrace(this, Vs),
      (this.name = "ValidationWarning");
  }
}
class Xs extends Error {
  constructor() {
    super(...arguments),
      Error.captureStackTrace && Error.captureStackTrace(this, Xs),
      (this.name = "FraudError"),
      (this.message = "Email verification failed");
  }
}
class Ys extends Error {
  constructor(t) {
    for (
      var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), n = 1;
      n < e;
      n++
    )
      s[n - 1] = arguments[n];
    super(...s),
      Error.captureStackTrace && Error.captureStackTrace(this, Xs),
      (this.name = "RestrainError"),
      (this.action = t),
      (this.message = "Your actions appear suspicious.");
  }
}
class Js extends Error {
  constructor(t, e) {
    for (
      var s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), i = 2;
      i < s;
      i++
    )
      n[i - 2] = arguments[i];
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, Js),
      (this.name = "NetworkError"),
      (this.status = t),
      (this.message = `${t} ${e}`),
      "undefined" != typeof navigator &&
        (this.onLine = navigator && navigator.onLine);
  }
}
async function Ks(t, e, s) {
  let n =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { Accept: "application/json" },
    i = 0,
    o = "";
  const r = { headers: n, signal: s };
  for (let e = 0; e < 6 && 404 !== i; e++) {
    try {
      if (s.aborted) return;
      const a = await fetch(t(e), r);
      if (s.aborted) return;
      if (a.ok) {
        let t;
        return (
          (t =
            "application/json" === n.Accept
              ? a.json()
              : "text/plain" === n.Accept
              ? a.text()
              : a.arrayBuffer()),
          await t
        );
      }
      (i = a.status),
        (o = 404 === a.status ? "Not Found" : a.statusText || "Network Error");
    } catch (t) {
      if (s.aborted || "AbortError" === t.name) return;
      console.error(t), (i = 0), (o = t.message || "Network Error");
    }
    await new Promise((t) => setTimeout(t, 20 * e));
  }
  throw new Js(i, o);
}
function Qs(t) {
  "requestIdleCallback" in window
    ? window.requestIdleCallback(t, { timeout: 500 })
    : setTimeout(t, 0);
}
const Zs = (t) => new Promise((e) => setTimeout(e, t));
function tn(t) {
  t.name = t.name.replace(/╨ö╨╛╤Ç╨╛╨╢╨║╨░/g, "Track");
}
class en {
  constructor() {
    this.aborted = !1;
  }
  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() {
    return !1;
  }
}
class sn {
  constructor() {
    this.signal = new en();
  }
  abort() {
    this.signal.aborted = !0;
  }
}
Object.defineProperty(sn, "name", { value: "AbortController" }),
  Object.defineProperty(en, "name", { value: "AbortSignal" });
var nn = "undefined" != typeof AbortController ? AbortController : sn;
const on = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"],
  rn = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
function an(t) {
  const e = t.name.toLowerCase(),
    s = t.instrument.toLowerCase();
  let n = t.name;
  ("untitled" === e || ("drumkit" === e && "drums" === s) || s.includes(e)) &&
    (n = ""),
    (t.title = t.instrument),
    n.length && (t.title = n + "┬á-┬á" + t.title);
}
async function cn(t, e, s) {
  const n = `/api/meta/${t}${e ? `/${e}` : ""}`,
    i = await Ks(() => n, "meta", s, void 0);
  if (s.aborted || !i) return null;
  if (i.tracks) {
    let t = 0;
    for (const e of i.tracks) {
      tn(e), an(e), (e.partId = t);
      const { instrumentId: s } = e;
      ye(s)
        ? (e.isDrums = !0)
        : be(s)
        ? (e.isBassGuitar = !0)
        : ve(s) && (e.isGuitar = !0),
        t++;
    }
    !(function (t) {
      const e = {};
      for (const s of t) {
        let t = e[s.title];
        t || ((t = []), (e[s.title] = t)), t.push(s);
      }
      for (const t in e) {
        const s = e[t];
        if (s.length > 1) {
          let t = 0;
          for (const e of s) (e.title += " " + (t + 1)), t++;
        }
      }
    })(i.tracks);
  }
  return i;
}
async function ln(t, e, s, n, i) {
  const o = `part_${e}_${s}_${n || ""}`,
    r = await Hs(o);
  if (r) return r;
  const a = await Ks(
    (i) =>
      n
        ? `https://${on[i % on.length]}.cloudfront.net/${t}/${e}/${n}/${s}.json`
        : `https://${rn[i % rn.length]}.cloudfront.net/part/${e}/${s}`,
    "part",
    i
  );
  return !a || i.aborted ? null : (await Ws(o, a), a);
}
async function dn(t, e) {
  let s = 0,
    n = null;
  const i = new nn();
  for (; !n && s < 120; ) {
    try {
      n = await cn(t, e, i.signal);
    } catch (t) {
      console.error(t), await Zs(2e3);
    }
    s++;
  }
  return n;
}
function un(t, e) {
  return !t || ("AllCountries" !== t.restriction && t.restriction !== e);
}
function hn(t, e) {
  if (!t.current) return !1;
  const s = e.isAdmin && t.current.nextAudio;
  return !!(t.current.audio || t.current.audioV2 || s);
}
const pn = (t) => {
    t.on("route/change", (e, s) => {
      let { routeContent: n } = s;
      if (n && "tab" === n.page) {
        const { songId: e, partId: s, revisionId: i, partInstrument: o } = n;
        !(async function (t, e, s, n, i) {
          const o = new nn();
          try {
            const r = t.get().meta,
              a = r.loading;
            a && a.ac.abort();
            const c = r.songId !== e,
              l = r.revisionId !== i;
            if (
              (await t.dispatch("meta/load:processing", {
                songId: e,
                partInstrument: s,
                partId: n,
                revisionId: i,
                songHasChanged: c,
                revisionHasChanged: l,
                ac: o,
              }),
              o.signal.aborted)
            )
              return;
            let d = t.get().meta.current;
            if (
              (c || l || !d || d.songId !== e || (i && d.revisionId !== i)) &&
              ((d = await cn(e, i, o.signal)), o.signal.aborted || !d)
            )
              return;
            if (null == n)
              n = (function (t, e) {
                if (!t && !t.length) return 0;
                let s = ve;
                "bass" === e ? (s = be) : "drum" === e && (s = ye);
                let n = t.filter((t) => s(t.instrumentId));
                n.length || (n = t);
                let i = n[0].partId,
                  o = 0;
                for (const t of n) {
                  const e = t.views || 0;
                  e > o && ((i = t.partId), (o = e));
                }
                return i;
              })(d.tracks, s);
            else if (d.tracks && !d.tracks[n])
              return void (await t.dispatch("navigate", De(d, i)));
            await t.dispatch("meta/load:done", {
              songId: e,
              partId: n,
              revisionId: i,
              current: d,
            });
          } catch (s) {
            if (o.signal.aborted) return;
            t.dispatch("meta/load:error", {
              songId: e,
              revisionId: i,
              error: s,
            });
          }
        })(t, e, o, s, i);
      }
    }),
      t.on("meta/load:processing", (t, e) => {
        let { songId: s, revisionId: n, ac: i } = e;
        return {
          meta: Object.assign({}, t.meta, {
            loading: { songId: s, revisionId: n, ac: i },
          }),
        };
      }),
      t.on("meta/load:done", (t, e) => {
        let { songId: s, revisionId: n, partId: i, current: o } = e;
        return {
          meta: Object.assign({}, t.meta, {
            current: o,
            allowedByLicense: un(o, t.device.country),
            songId: s,
            revisionId: n,
            partId: i,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          }),
        };
      }),
      t.on("meta/load:done", (t, e) => {
        let { current: s } = e;
        try {
          "undefined" != typeof MediaMetadata &&
            (navigator.mediaSession.metadata = new MediaMetadata({
              title: s.title,
              artist: s.artist,
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
            }));
        } catch (t) {
          console.error(t);
        }
      }),
      t.on("meta/load:error", (t, e) => {
        let { songId: s, revisionId: n, error: i } = e;
        return {
          meta: Object.assign({}, t.meta, {
            current: null,
            allowedByLicense: !0,
            songId: s,
            revisionId: n,
            partId: null,
            loading: null,
            isFailed: !0,
            isNetworkFailed: i instanceof Js && 0 === i.status,
            isNotFound:
              i instanceof Js && (404 === i.status || 400 === i.status),
          }),
        };
      }),
      t.on("meta/load:error", (t, e) => {
        let { error: s } = e;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(s),
          console.error(s);
      }),
      t.on("meta/setWasFavoriteOnServerRender", (t, e) => ({
        meta: Object.assign({}, t.meta, { wasFavoriteOnServerRender: e }),
      }));
  },
  gn = (t) => {
    let { profile: e } = t;
    const {
        dispatch: n,
        meta: i,
        player: o,
        experiments: r,
      } = k("meta", "player", "experiments"),
      a = i.current && o.version,
      c = e.admin || "on" === r.new_sound_control,
      l = e.admin;
    if (!a || !c) return;
    let d = null;
    const h = o.version;
    if ("audio" !== h) {
      const t = "next" === h,
        e = t ? i.current.nextMidi : i.current.audioV2Midi,
        n = t ? i.current.nextAudio : i.current.audioV2;
      let o = t ? "v2" : "v1",
        r = t ? "v2" : "v1",
        a = e;
      /^v\d+-/.test(e) && ([o, a] = e.split("-")),
        /^v\d+-/.test(n) && ([r] = n.split("-")),
        (d = s(
          "span",
          null,
          "πÇÇVersion: ",
          l
            ? s(
                "a",
                {
                  className: "Cpv2kr",
                  href: `https://github.com/songsterr/songsterr-processor-midi/commit/${a}`,
                  target: "_blank",
                },
                `midi-${o}`
              )
            : "",
          ` audio-${r}`
        ));
    }
    const p = (t, e) => {
        t.preventDefault(), n("editor/sound:generate", { version: e });
      },
      g = (t, e) => {
        t.preventDefault(), n("editor/sound:toggle", { version: e });
      },
      f = (t, e) => {
        t.preventDefault(),
          document.firstElementChild.setAttribute("color-scheme", e);
      },
      m = (function (t) {
        return (
          t.current && t.current.nextAudio && t.current.nextAudio.includes("-")
        );
      })(i),
      y = s(
        u,
        null,
        "πÇÇ|πÇÇ",
        s("a", { className: "Cpv2kr", onClick: (t) => f(t, "light") }, "Light"),
        " ",
        s("a", { className: "Cpv2kr", onClick: (t) => f(t, "dark") }, "Dark"),
        " ",
        "πÇÇ|πÇÇ",
        s(
          "a",
          { className: "Cpv2kr Cpv1x", onClick: (t) => p(t, "audioV2") },
          i.current.audioV2 ? "Regenerate Prod" : "Generate Prod"
        ),
        " ",
        s(
          "a",
          { className: "Cpv2kr Cpv1x", onClick: (t) => p(t, "next") },
          m ? "Regenerate Dev" : "Generate Dev"
        )
      );
    return s(
      "div",
      { className: "Cpv1d" },
      s(
        "div",
        { className: "Cpvpq" },
        s(
          "div",
          null,
          "Sound: ",
          l &&
            s(
              "a",
              {
                className: "audio" === h ? "Cpv2kr Cpv1th" : "Cpv2kr",
                disabled: !i.current.audio,
                onClick: (t) => g(t, "audio"),
              },
              "SRWO"
            ),
          " ",
          s(
            "a",
            {
              className: "audioV2" === h ? "Cpv2kr Cpv1th" : "Cpv2kr",
              disabled: !i.current.audioV2,
              onClick: (t) => g(t, "audioV2"),
            },
            "Prod"
          ),
          " ",
          s(
            "a",
            {
              className: "next" === h ? "Cpv2kr Cpv1th" : "Cpv2kr",
              disabled: !m,
              onClick: (t) => g(t, "next"),
            },
            "Dev"
          ),
          " ",
          d
        ),
        s(
          "div",
          { className: "Cpv6d" },
          "πÇÇ|πÇÇ",
          l &&
            s(
              "a",
              {
                className: "Cpv2kr Cpv1x",
                href: "https://www.songsterr.com/api/sound/audioV2",
                target: "_blank",
              },
              "Latest Prod"
            ),
          l && " ",
          s(
            "a",
            {
              className: "Cpv2kr Cpv1x",
              href: "https://www.songsterr.com/api/sound/next",
              target: "_blank",
            },
            "Latest Dev"
          ),
          l && y
        )
      )
    );
  },
  fn = 12,
  mn = 25,
  yn = 35,
  vn = 25,
  bn = 18,
  wn = 5,
  Sn = 12,
  En = 8,
  In = 12,
  xn = 22,
  kn = 12,
  Tn = 2,
  On = 2,
  An = 0,
  Pn = 0,
  Ln = -5,
  Cn = 4,
  Nn = 12,
  Rn = -3,
  jn = [];
function _n(t) {
  return -1 * Math.floor(t.width / 2);
}
class Mn {
  constructor(t, e, s) {
    v(this, "source", void 0),
      v(this, "index", void 0),
      v(this, "prevBeat", void 0),
      v(this, "nextBeat", void 0),
      v(this, "duration", void 0),
      v(this, "type", void 0),
      v(this, "dotted", void 0),
      v(this, "tuplet", void 0),
      v(this, "rest", void 0),
      v(this, "pickStroke", void 0),
      v(this, "upStroke", void 0),
      v(this, "downStroke", void 0),
      v(this, "letRing", void 0),
      v(this, "palmMute", void 0),
      v(this, "harmonic", void 0),
      v(this, "wideVibrato", void 0),
      v(this, "vibrato", void 0),
      v(this, "width", void 0),
      v(this, "voice", void 0),
      v(this, "beamStart", void 0),
      v(this, "beamStop", void 0),
      v(this, "tupletStart", void 0),
      v(this, "tupletStop", void 0),
      v(this, "lyrics", void 0),
      v(this, "layout", void 0),
      v(this, "notes", void 0),
      v(this, "chord", void 0),
      v(this, "text", void 0),
      v(this, "tapping", void 0),
      v(this, "originalText", void 0),
      v(this, "hat", void 0),
      v(this, "accentuated", void 0),
      v(this, "heavyAccentuated", void 0),
      v(this, "staccato", void 0),
      v(this, "tremolo", void 0),
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
      (this.notes = t.notes ? new Array(t.notes.length) : jn),
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
          ? t.lyrics.map((t) => ({ layer: null, text: t.text, width: t.width }))
          : void 0),
      (this.tapping = t.tapping
        ? { layer: null, text: "T", width: 6 }
        : void 0);
  }
  getLyricsPosition(t, e) {
    const s = _n(t),
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
    return this.notes.some((t) => t.rightSlide || t.leftSlide);
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
class Dn {
  constructor(t) {
    v(this, "x", void 0),
      v(this, "originX", void 0),
      v(this, "absoluteX", void 0),
      v(this, "absoluteLoopLeftX", void 0),
      v(this, "absoluteLoopRightX", void 0),
      v(this, "measureLayout", void 0),
      v(this, "duration", void 0),
      v(this, "beats", void 0),
      v(this, "occurrences", void 0),
      v(this, "usedStrings", void 0),
      v(this, "usedRest", void 0),
      v(this, "shifts", void 0),
      v(this, "durationBeforeNextPickStroke", void 0),
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
function Bn(t, e) {
  return (
    t.layout.measureLayout.lineLayout !== e.layout.measureLayout.lineLayout
  );
}
function Fn(t, e) {
  return (
    t.layout.measureLayout.measure.index !==
    e.layout.measureLayout.measure.index
  );
}
function $n(t, e) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (t === e && !s) return 0;
  let n = e.layout.x;
  if (s) {
    const t = e.nextBeat;
    t && ((n = t.layout.x), Fn(e, t) && (n += e.layout.measureLayout.width));
  }
  const i = t.layout.measureLayout.measure;
  let o = i.layout.x + n - t.layout.absoluteX;
  const r = e.layout.measureLayout.measure,
    a = r.index;
  let c = -1,
    l = t;
  for (; l && c < a; ) {
    const t = l.layout.measureLayout.measure;
    t.index > c && t.index < a && (o += t.layout.width),
      (c = t.index),
      (l = l.nextBeat);
  }
  return o;
}
function Un(t) {
  const e = t.lastRef().beat,
    s = e.nextBeat ? e.nextBeat : e;
  return Bn(t.firstRef().beat, s);
}
function zn(t) {
  return Bn(t.firstRef().beat, t.lastRef().beat);
}
class Gn {
  constructor(t) {
    v(this, "refs", void 0),
      v(this, "keep", void 0),
      v(this, "layer", void 0),
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
const Hn = { family: "Arial", size: 13, style: "normal" },
  Wn = new Map();
function qn(t, e, s) {
  let n = Wn.get(s.family);
  n || ((n = new Map()), Wn.set(s.family, n));
  let i = n.get(s.style);
  i || ((i = new Map()), n.set(s.style, i));
  let o = i.get(s.size);
  o || ((o = new Map()), i.set(s.size, o));
  let r = o[e];
  return void 0 !== r || ((r = t(e, s)), (o[e] = r)), r;
}
class Vn {}
v(Vn, "textWidth", void 0), v(Vn, "fitTextToAvailableWidth", void 0);
let Xn = null;
const Yn =
  ((Jn = function (t, e) {
    let s = !0;
    ("undefined" != typeof document &&
      "function" == typeof document.createElement) ||
      (s = !1),
      (Xn = s ? document.createElement("canvas") : null);
    const n =
      Xn && "function" == typeof Xn.getContext ? Xn.getContext("2d") : null;
    if (((s = !!n && "function" == typeof n.measureText), !s || !n)) return 0;
    const i = {
        style: "normal",
        constraint: "normal",
        weight: "normal",
        size: Hn.size,
        family: Hn.family,
        align: "start",
        baseline: "alphabetic",
      },
      o = Object.assign({}, i, e);
    return (
      (n.font = `${o.style} ${o.constraint} ${o.weight} ${o.size}px ${o.family}`),
      (n.textAlign = o.align),
      (n.textBaseline = o.baseline),
      +n.measureText(t).width.toFixed(4)
    );
  }),
  function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hn;
    return t && t.length ? qn(Jn, t, e) : 0;
  });
var Jn;
const Kn =
  ((Qn = Yn),
  function (t, e, s) {
    let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    const i = t.split(" ");
    let o = i[0],
      r = Qn(o, Hn),
      a = 1;
    for (; a < i.length - 1; a++) {
      const t = Qn(i[a], Hn);
      if (r + 3.6118 + t > s) break;
      (o += " " + i[a]), (r += 3.6118 + t);
    }
    const c = n ? "ΓÇª" : "",
      l = n ? 13 : 0;
    o += c;
    const d = c + i.slice(a).join(" ");
    return {
      phrase: { text: o, width: r + l, layer: null },
      rest: { text: d, width: e - r + l, layer: null },
    };
  });
var Qn;
class Zn extends Vn {
  static textWidth(t, e) {
    return Yn(t, e);
  }
  static fitTextToAvailableWidth(t, e, s, n) {
    return Kn(t, e, s, n);
  }
}
function ti(t, e) {
  return (t.x1 <= e.x1 && e.x1 < t.x2) || (e.x1 <= t.x1 && t.x1 < e.x2);
}
const ei = ["staccato", "accentuated", "heavyAccentuated"],
  si = {
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
  ni = {
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
  };
class ii {
  constructor() {
    v(this, "levels", void 0),
      v(this, "height", void 0),
      (this.levels = new Map()),
      (this.height = 0);
  }
  _getLevel(t) {
    let e = this.levels.get(t);
    return e || ((e = []), this.levels.set(t, e)), e;
  }
  acquireLayer(t, e) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    const n = ni[t];
    return this.acquireLayerWithHeight(t, n, e, s);
  }
  acquireLayerWithHeight(t, e, s) {
    const n = si[t],
      i = {
        effect: t,
        voice:
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        visible: !0,
        x1: s.x1,
        x2: s.x2,
        height: e,
        y: 0,
        diff: s.diff,
      },
      o = this._getLevel(n);
    if (o.length && ei.includes(i.effect))
      for (const t of o)
        t.x1 === i.x1 &&
          t.x2 === i.x2 &&
          t.effect === i.effect &&
          ((t.voice = 0), (i.visible = !1));
    return o.push(i), i;
  }
  _fitLayer(t, e, s, n) {
    let i = t;
    const o = "beatLyrics" === e.effect;
    if (s > 0 && !o)
      for (const t of n) ti(t, e) && (i = Math.max(i, t.y + t.height));
    (e.y = i), (this.height = Math.max(this.height, e.y + e.height)), n.push(e);
  }
  shake() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22;
    const e = [];
    this.height = t;
    const s = Array.from(this.levels.keys()).sort((t, e) => t - e);
    for (const n of s) {
      const s = this.levels.get(n) || [];
      for (const i of s) i.visible && this._fitLayer(t, i, n, e);
    }
  }
}
class oi {
  constructor(t, e) {
    v(this, "layers", void 0),
      v(this, "bottomLayers", void 0),
      v(this, "x", void 0),
      v(this, "y", void 0),
      v(this, "maxX", void 0),
      v(this, "maxY", void 0),
      v(this, "minX", void 0),
      v(this, "height", void 0),
      v(this, "line", void 0),
      (this.layers = new ii()),
      (this.bottomLayers = new ii()),
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
    return this.y + 12 - 5;
  }
  get loopHeight() {
    return this.height - 24 + 10;
  }
}
const ri = {
  letRing: function (t) {
    return ai(t, 40);
  },
  palmMute: function (t) {
    return ai(t, 29);
  },
  harmonic: function (t) {
    return ai(t, 38);
  },
  vibrato: ci,
  wideVibrato: ci,
};
function ai(t, e) {
  if (!t.start || !t.stop) throw new Error("Wrong line effect state");
  const s = t.start.absoluteX - 20;
  let n = t.stop.absoluteX + 10;
  return n - s < e && (n = s + e), { x1: s, x2: n };
}
function ci(t) {
  const { start: e, stop: s } = t;
  if (!e || !s) throw new Error("Wrong line effect state");
  let n = null;
  const i = s.measureLayout.measure,
    o = i.beatsLayouts,
    r = o.findIndex((t) => t === s);
  if (r > -1 && r < o.length - 1) n = o[r + 1];
  else {
    const t = s.measureLayout.lineLayout.line.measures,
      e = t.findIndex((t) => t === i);
    e > -1 && e < t.length - 1 && (n = t[e + 1].beatsLayouts[0]);
  }
  return { x1: e.absoluteX, x2: n ? n.absoluteX : s.maxX };
}
function li(t) {
  const e = t.firstRef().note.bend;
  if (!e) throw new Error("Wrong state at bend note");
  return -1 * (-5 - e.tone / 4);
}
class di {
  constructor(t, e, s) {
    v(this, "index", void 0),
      v(this, "strings", void 0),
      v(this, "measures", void 0),
      v(this, "effects", void 0),
      v(this, "spaces", void 0),
      v(this, "width", void 0),
      v(this, "rhythmLines", void 0),
      v(this, "layout", void 0),
      v(this, "hangingText", void 0),
      v(this, "capo", void 0),
      v(this, "rhythmEffects", void 0),
      (this.index = t),
      (this.strings = e.strings),
      (this.measures = []),
      (this.effects = []),
      (this.spaces = new Array(this.strings)),
      (this.width = 0),
      (this.rhythmLines = 0),
      (this.layout = new oi(s, this)),
      (this.hangingText = []),
      (this.capo = 0 === t && e.capo ? { capo: e.capo, layer: null } : void 0),
      (this.rhythmEffects = { tremolo: new Map(), tuplet: new Map() });
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
      const s = this.layout.layers.acquireLayer(t, ri[t](e));
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
  prepare(t, e, s) {
    const n = [],
      i = t.usedDrums,
      o = s(this);
    for (const t of this.hangingText)
      t.layer = this.layout.layers.acquireLayer(
        "lineHangingText",
        this.getHangingTextPosition(t)
      );
    const r = this.capo;
    var a;
    void 0 !== r &&
      (r.layer = this.layout.layers.acquireLayer(
        "capo",
        (r.capo, { x1: (a = this.layout.maxX) - 120, x2: a })
      ));
    for (let t = 0; t < this.spaces.length; t++) this.spaces[t] = [];
    const c = { detected: !1, start: null, stop: null, value: void 0 },
      l = { detected: !1, start: null, stop: null, value: void 0 },
      d = { detected: !1, start: null, stop: null, value: void 0 },
      u = { detected: !1, start: null, stop: null, value: void 0 },
      h = { detected: !1, start: null, stop: null, value: void 0 };
    for (const s of this.measures) {
      s.scaleIt(o),
        (this.rhythmLines = Math.max(this.rhythmLines, s.rhythmLines));
      const r = s.alternateEnding;
      r &&
        (r.layer = this.layout.layers.acquireLayer(
          "measureAlternateEnding",
          s.getAlternateEndingPosition()
        ));
      const a = s.marker;
      a &&
        (a.layer = this.layout.layers.acquireLayer(
          "measureMarker",
          s.getMarkerPosition(a)
        ));
      const p = s.tripletFeel;
      p &&
        (p.layer = this.layout.layers.acquireLayer(
          "tripletFeel",
          s.getTripletFeelPosition()
        ));
      let g = 0;
      for (const o of s.beatsLayouts)
        for (const s of o.beats)
          if (s.lyrics) {
            for (const t of s.lyrics)
              if (t) {
                const e = s.getLyricsPosition(t, g);
                (g = e.x2),
                  (t.layer = this.layout.bottomLayers.acquireLayer(
                    "beatLyrics",
                    e
                  ));
              }
          } else {
            const o = s.originalText;
            if (o) {
              const t = this.layout.maxX + 5 - s.layout.absoluteX;
              let i = o;
              if (i.width > t) {
                const { phrase: s, rest: o } = Zn.fitTextToAvailableWidth(
                  i.text,
                  i.width,
                  t,
                  e.hasHellip()
                );
                (i = s), n.push(o);
              }
              i &&
                ((i.layer = this.layout.layers.acquireLayer(
                  "beatText",
                  s.getTextPosition(i)
                )),
                (s.text = i));
            }
            const r = s.chord;
            r &&
              (r.layer = this.layout.layers.acquireLayer(
                "beatChord",
                s.getChordPosition(r)
              ));
            const a = s.tapping;
            a &&
              ((a.voice = s.voice),
              (a.layer = this.layout.layers.acquireLayer(
                "beatTapping",
                s.getTextPosition(a)
              ))),
              0 === s.voice &&
                (this.joinLineEffect(s, "letRing", c),
                this.joinLineEffect(s, "palmMute", l),
                this.joinLineEffect(s, "harmonic", d),
                this.joinLineEffect(s, "vibrato", u),
                this.joinLineEffect(s, "wideVibrato", h)),
              s.tuplet > 0 && this.rhythmEffects.tuplet.set(s.voice, !0);
            for (const n of s.notes) {
              if (!n.rest) {
                const e = i ? n.drumString(i) : n.string;
                if (e % 1 == 0 && e >= 0 && e < t.strings) {
                  const o = n.margin(4, t);
                  if (o) {
                    const t = s.layout.absoluteX - o,
                      n = o << 1,
                      i = this.spaces[e];
                    if (i) {
                      const e = i.length;
                      if (e) {
                        const r = i[e - 1];
                        r.x + r.w >= t
                          ? ((r.x = Math.min(r.x, t)),
                            (r.w = s.layout.absoluteX + o - r.x))
                          : i.push({ x: t, w: n });
                      } else i.push({ x: t, w: n });
                    }
                  }
                  if (
                    (!i ||
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
                    this.rhythmEffects.tremolo.set(s.voice, !0),
                      (s.tremolo = {
                        voice: s.voice,
                        type: 32 === t ? 3 : 16 === t ? 2 : 1,
                      });
                  }
                }
              }
              const o = n.bendStart;
              if (o) {
                const t = e.getBendCoordinates(o, n);
                (t.x1 += s.layout.absoluteX),
                  (t.x2 += s.layout.absoluteX),
                  (o.layer = this.layout.layers.acquireLayerWithHeight(
                    "noteBend",
                    li(o),
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
    this.finishLineEffect("letRing", c),
      this.finishLineEffect("palmMute", l),
      this.finishLineEffect("harmonic", d),
      this.finishLineEffect("vibrato", u),
      this.finishLineEffect("wideVibrato", h),
      this.layout.layers.shake();
    const p =
      12 * this.strings +
      25 * this.rhythmLines +
      12 * this.rhythmEffects.tremolo.size +
      8 * this.rhythmEffects.tuplet.size;
    return (
      this.layout.bottomLayers.shake(p),
      (this.layout.layers.height += 12),
      (this.layout.height =
        this.layout.layers.height + this.layout.bottomLayers.height + 12),
      (this.layout.maxY = this.layout.y + this.layout.height),
      n
    );
  }
}
class ui {
  constructor(t, e) {
    v(this, "measure", void 0),
      v(this, "x", void 0),
      v(this, "originX", void 0),
      v(this, "width", void 0),
      v(this, "originWidth", void 0),
      v(this, "lineLayout", void 0),
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
const hi = { bpm: 100, type: 4, position: 0 };
class pi {
  constructor(t, e, s, n, i) {
    v(this, "source", void 0),
      v(this, "index", void 0),
      v(this, "hasSignature", void 0),
      v(this, "signature", void 0),
      v(this, "duration", void 0),
      v(this, "scale", void 0),
      v(this, "rest", void 0),
      v(this, "repeatStart", void 0),
      v(this, "repeat", void 0),
      v(this, "voices", void 0),
      v(this, "rhythmLines", void 0),
      v(this, "width", void 0),
      v(this, "layout", void 0),
      v(this, "marker", void 0),
      v(this, "alternateEnding", void 0),
      v(this, "tripletFeel", void 0),
      v(this, "beatsLayoutsByTime", void 0),
      v(this, "beatsLayoutsTimes", void 0),
      v(this, "beatsLayouts", void 0),
      v(this, "tempoLayoutsByTime", void 0),
      v(this, "tempoLayoutsTimes", void 0),
      v(this, "tempoLayouts", void 0),
      v(this, "reprise", void 0),
      (this.source = t),
      (this.index = e),
      (this.hasSignature = !!t.signature),
      (this.signature = t.signature || s),
      (this.duration = 0),
      (this.scale = t.scale || 1),
      (this.rest = t.rest);
    const o = t.repeat || 0;
    (this.repeatStart = t.repeatStart),
      (this.repeat = Math.min(o, i ? 32 : 10)),
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
      (this.layout = new ui(this, n));
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
const gi = [
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
  fi = {
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
  mi = [
    3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, -0.5, 3,
    5.5, 2, -0.5, 1, 1, -1, 0, 0, -1, 0.5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5,
    4.5, 5, 5, 5.5, 0.5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5,
    -0.5, -0.5, -1, -1, -1, -1.5, 6, 6,
  ];
(mi[64] = 1.5), (mi[65] = -1), (mi[66] = 0);
const yi = [
  3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, -0.5, 3, 4.5,
  2.5, -0.5, 2, 1, -1, 0.5, 0, -1.5, 0, 1.5, -1, 0, -0.5, 5, 1, 2, 3, 4.5, 4.5,
  5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, -0.5,
  -0.5, -1, -1, -1, -1.5, 5, 5,
];
(yi[64] = 1.5), (yi[65] = -0.5), (yi[66] = 0), (yi[75] = -0.5), (yi[72] = 0.5);
const vi = {
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
  bi = [
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
function wi(t) {
  for (const e of gi) {
    let s = 0;
    for (const n of e) t.has(n.key) && s++;
    if (s > 1)
      for (const s of e)
        t.set(s.key, Object.assign({}, s.value, { fret: s.key }));
  }
}
function Si(t, e) {
  return (e ? yi[t - 27] : mi[t - 27]) || 0;
}
(bi[64] = "SR"),
  (bi[65] = "hH"),
  (bi[66] = "RE"),
  (bi[72] = "lcb"),
  (bi[75] = "hcb");
class Ei {
  constructor(t, e, s, n) {
    v(this, "source", void 0),
      v(this, "index", void 0),
      v(this, "string", void 0),
      v(this, "fret", void 0),
      v(this, "beat", void 0),
      v(this, "hp", void 0),
      v(this, "rest", void 0),
      v(this, "tie", void 0),
      v(this, "bend", void 0),
      v(this, "vibrato", void 0),
      v(this, "harmonic", void 0),
      v(this, "accentuated", void 0),
      v(this, "staccato", void 0),
      v(this, "rightSlide", void 0),
      v(this, "leftSlide", void 0),
      v(this, "dead", void 0),
      v(this, "ghost", void 0),
      v(this, "tremolo", void 0),
      v(this, "slideStart", void 0),
      v(this, "slideEnd", void 0),
      v(this, "slurStart", void 0),
      v(this, "slurEnd", void 0),
      v(this, "tieStart", void 0),
      v(this, "tieEnd", void 0),
      v(this, "bendStart", void 0),
      v(this, "bendPart", void 0),
      v(this, "bendEnd", void 0),
      v(this, "prevNoteOnString", void 0),
      v(this, "nextNoteOnString", void 0),
      v(this, "bogus", void 0),
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
      (this.rightSlide = (function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "unknown";
        if (t) {
          if (t.includes("shift")) return "shift";
          if (t.includes("legato")) return "legato";
          if (t.includes("downwards")) return "downwards";
          if (t.includes("upwards")) return "upwards";
        }
      })(t.slide)),
      (this.leftSlide = (function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "unknown";
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
        return (vi[e] || 0) + t;
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
    if (!t) return null;
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
const Ii = new Map(),
  xi = [],
  ki = [];
class Ti {
  constructor(t, e, s, n) {
    v(this, "source", void 0),
      v(this, "index", void 0),
      v(this, "strings", void 0),
      v(this, "frets", void 0),
      v(this, "tuning", void 0),
      v(this, "voices", void 0),
      v(this, "name", void 0),
      v(this, "instrument", void 0),
      v(this, "instrumentId", void 0),
      v(this, "artist", void 0),
      v(this, "title", void 0),
      v(this, "capo", void 0),
      v(this, "withChords", void 0),
      v(this, "withLyrics", void 0),
      v(this, "automations", void 0),
      v(this, "measures", void 0),
      v(this, "tpqn", void 0),
      v(this, "progression", void 0),
      v(this, "tempos", void 0),
      v(this, "timeline", void 0),
      v(this, "timestamps", void 0),
      v(this, "revisionId", void 0),
      v(this, "songId", void 0),
      v(this, "partId", void 0),
      v(this, "shifts", void 0),
      v(this, "sourceLyrics", void 0),
      v(this, "difficulty", void 0),
      v(this, "usedDrums", void 0),
      v(this, "isDrumStdOn", void 0),
      (this.source = t),
      (this.index = e),
      (this.strings = ye(t.instrumentId) ? (n ? 5 : 6) : t.strings),
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
      (this.tempos = ki),
      (this.timeline = Ii),
      (this.shifts = xi),
      (this.timestamps = xi),
      (this.songId = t.songId),
      (this.partId = t.partId),
      (this.revisionId = t.revisionId),
      (this.difficulty = null),
      (this.sourceLyrics = s),
      (this.withLyrics = t.withLyrics),
      (this.usedDrums = ye(t.instrumentId) ? new Map() : null),
      (this.isDrumStdOn = n),
      (this.withChords = !1);
  }
  hasTimeline() {
    return this.timeline !== Ii;
  }
}
class Oi {
  constructor(t) {
    v(this, "startIndex", void 0),
      v(this, "endIndex", void 0),
      v(this, "alternateEndings", void 0),
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
class Ai {
  constructor(t) {
    v(this, "source", void 0),
      v(this, "measureOffset", void 0),
      v(this, "originMeasureOffset", void 0),
      v(this, "tempo", void 0),
      v(this, "layer", void 0),
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
class Pi {
  constructor(t, e) {
    v(this, "source", void 0),
      v(this, "index", void 0),
      v(this, "beats", void 0),
      v(this, "hasSameRhythm", void 0),
      v(this, "lyrics", !1),
      v(this, "rest", void 0),
      (this.source = t),
      (this.index = e),
      (this.rest = (t && t.rest) || !1),
      (this.beats = t && !this.rest ? new Array(t.beats.length) : []),
      (this.hasSameRhythm = !t || t.hasSameRhythm || !1);
  }
}
function Li(t, e) {
  let s;
  return (
    (s =
      (t & (t - 1)) | (e & (e - 1))
        ? (t * e) /
          (function (t, e) {
            let s = t,
              n = e;
            for (; 0 !== s && 0 !== n; ) s >= n ? (s %= n) : (n %= s);
            return s + n;
          })(t, e)
        : Math.max(t, e)),
    s <= 0 || s >= 32768 || s % 1 != 0 ? t : s
  );
}
function Ci(t) {
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
          const { tuplet: t, duration: a, notes: c } = s;
          if ((t && (e.includes(t) || e.push(t)), a && a.length)) {
            const t = de(a);
            if (0 != ((r = t) & (r - 1)) || t > 32768) continue;
            e.includes(t) || e.push(t);
            for (const t of c)
              t.dead && (n = !0),
                (t.bend || t.slide) && (i = !0),
                t.tremolo && (o = !0);
          }
        }
  }
  var r;
  s && e.push(24, 48),
    n && e.push(128),
    i && e.push(60),
    o && e.push(8, 16, 32, 64);
  const a = Math.max(4 * Math.max(...e), 32);
  let c = e.reduce(Li, a) || 128;
  for (; c < 1e4; ) c *= 2;
  return c;
}
function Ni(t, e, s) {
  return t * (6e4 / s / e);
}
const Ri = (t) => ((hi.bpm / hi.type) * 960) / (t.bpm / t.type),
  ji = (t) => ((t / 960) * 6e4) / hi.bpm,
  _i = (t, e) => t * e * hi.type;
function Mi(t, e) {
  const s = (function (t) {
      const e = [];
      let s = null,
        n = 0,
        i = !1,
        o = 0;
      for (let r = 0; r < t.length; ) {
        if ((o++, o > 1e5)) throw new Error("Watchdog");
        const a = t[r];
        if (
          (e.push(a),
          !a.reprise ||
            a.reprise.startIndex !== a.index ||
            (s && s.startIndex === a.index) ||
            ((s = a.reprise), (n = 1)),
          s)
        ) {
          if (a.repeat && n < a.repeat) (r = s.startIndex), n++, (i = !1);
          else if ((r++, r < t.length)) {
            const e = t[r];
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
                ? ((r = s.startIndex), n++, (i = !1))
                : ((r = s.getEnding(n) || s.endIndex + 1), (i = !0));
            }
            r > s.endIndex && ((s = !1), (n = 0));
          }
        } else r++;
      }
      return e;
    })(e),
    n = new Map(),
    i = [],
    o = [];
  let r = hi,
    a = 960,
    c = 960,
    l = 0,
    d = 0;
  for (const e of s) {
    const s = e.beatsLayoutsByTime,
      u = e.tempoLayoutsByTime,
      h = t ? pe(e.signature, t) : ue(e.signature),
      p = e.beatsLayoutsTimes || [];
    let g = s.get(0),
      f = l;
    const m = l,
      y = d;
    if (g) {
      const e = d - 2 * l;
      g.shifts.push(e), i.push(e), g.occurrences.push(l), n.set(l, g);
      const v = u.get(0);
      v &&
        ((r = v.tempo),
        o.push({ timestamp: l, tempo: r }),
        (a = Math.floor(Ri(r))),
        (c = Math.floor(2 * Ri(r))));
      for (let e = 1; e < p.length; e++) {
        const o = p[e],
          u = s.get(o);
        if (u)
          if (o < h) {
            if (t) {
              const e = Ni(o, t, r.bpm);
              (l = m + e), (d = y + 2 * e);
            } else {
              const t = he(o);
              (l = m + ji(_i(t, a))), (d = y + ji(_i(t, c)));
            }
            g.duration = l - f;
            const e = d - 2 * l;
            g.shifts.push(e),
              i.push(e),
              u.occurrences.push(l),
              n.set(l, u),
              (g = u),
              (f = l);
          } else u.occurrences.push(l);
      }
    }
    if (t) {
      const e = Ni(h, t, r.bpm);
      (l = m + e), (d = y + 2 * e);
    } else {
      const t = he(h);
      (l = m + ji(_i(t, a))), (d = y + ji(_i(t, c)));
    }
    g && (g.duration = l - f);
  }
  return {
    timeline: n,
    tempos: o,
    shifts: i,
    progression: s.map((t) => t.source.index),
  };
}
function Di(t, e) {
  const s = t.get(e);
  if (!s) throw new Error("Broken timeline");
  return s;
}
function Bi(t, e) {
  return 2 * t + e;
}
function Fi(t, e, s) {
  const { timeline: n, timestamps: i } = t,
    o = i[0],
    r = i[i.length - 1];
  if (e <= o) return Di(n, o);
  if (e >= r) return Di(n, r);
  let a = 0,
    c = i.length,
    l = 0,
    d = i[0];
  for (; c - a > 1; ) {
    l = Math.floor((a + c) / 2);
    const t = i[l];
    if (e < t) c = l;
    else {
      if (!(e > t)) {
        d = t;
        break;
      }
      a = l;
    }
  }
  return (d = c - a > 1 ? i["left" === s ? l : l - 1] : i[a]), Di(n, d);
}
function $i(t, e) {
  let s =
    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left";
  const { timestamps: n } = t,
    i = n[0],
    o = n[n.length - 1];
  if (e <= i) return 0;
  if (e >= o) return n.length - 1;
  let r = 0,
    a = n.length,
    c = 0;
  for (; a - r > 1; ) {
    c = Math.floor((r + a) / 2);
    const t = n[c];
    if (e < t) a = c;
    else {
      if (!(e > t)) return c;
      r = c;
    }
  }
  return a - r > 1 ? ("left" === s ? c : c - 1) : r;
}
function Ui(t, e) {
  let s = t.tempos[0];
  for (const n of t.tempos) {
    if (n.timestamp > e) break;
    s = n;
  }
  return s ? s.tempo : hi;
}
function zi(t, e, s, n, i) {
  const o = s.measureLayout.measure.reprise,
    r = n.measureLayout.measure.reprise;
  let a = s.leftTime;
  const c = n.leftTime,
    l = n.firstLoopRightTime;
  !o || (r && o.startIndex === r.startIndex) || (a = s.rightTime);
  const d = a;
  let u = e;
  if (a > e || e >= l) {
    const s = Fi(t, e, "left"),
      n = s.leftTime,
      o = s.rightTime;
    u = a <= n && n < l ? n : a <= o && o < l ? o : "right" === i ? c : d;
  }
  return { cursor: u, loopStart: a, loopEnd: l };
}
function Gi(t, e, s) {
  let n = t.measures[0];
  for (const s of t.measures) {
    if (s.layout.x > e) break;
    n = s;
  }
  const i = n.beatsLayouts;
  let o = 0,
    r = i.length,
    a = 0,
    c = i[0];
  for (; r - o > 1; ) {
    (a = Math.floor((o + r) / 2)), (c = i[a]);
    const t = c.absoluteX;
    if (t < e) o = a;
    else {
      if (!(t > e)) break;
      r = a;
    }
  }
  if (r - o > 1) return c;
  {
    if (r === i.length) return i[o];
    const t = i[o],
      n = i[r],
      a = n.absoluteX - t.absoluteX,
      c = (function (t) {
        switch (t) {
          case "left":
            return 0.2;
          case "right":
            return 0.8;
          default:
            return 0.5;
        }
      })(s);
    return t.absoluteX + a * c > e ? t : n;
  }
}
function Hi(t, e, s) {
  let n = 0,
    i = t.lines.length,
    o = t.lines[0];
  for (; i - n > 1; ) {
    const s = Math.floor((n + i) / 2),
      r = t.lines[s];
    if (e.y < r.layout.y) i = s;
    else {
      if (!(e.y > r.layout.maxY)) {
        o = r;
        break;
      }
      n = s;
    }
  }
  return Gi(o, e.x, s);
}
const Wi = new Map();
function qi(t, e, s) {
  let n = Wi.get(e);
  if (!n) {
    const s = t ? ((t, e) => 1 / ((4 * t) / e))(t, e) : he(e);
    (n = 130 * Math.log(s + 1) + 20), Wi.set(e, n);
  }
  return s ? 0.2 * n : n;
}
function Vi(t) {
  t.layout.usedRest = !0;
}
function Xi(t, e) {
  e.rest || (t.layout.usedStrings |= 1 << e.string);
}
function Yi(t, e) {
  var s;
  ye(t.instrumentId) &&
    t.usedDrums &&
    t.usedDrums.set(
      e.fret,
      ((s = e.fret), { string: e.string, name: bi[s - 27] || "*", fret: s })
    );
}
function Ji(t, e, s, n) {
  const i = t.hp || "legato" === t.rightSlide,
    o = n[t.string];
  !o ||
    i ||
    t.tie ||
    (o.addRef({ note: t, beat: e, measure: s }),
    (o.firstRef().note.slurStart = o),
    (o.lastRef().note.slurEnd = o),
    (n[t.string] = void 0)),
    !o && i && (n[t.string] = new Gn({ note: t, beat: e, measure: s }));
}
function Ki(t, e, s, n) {
  const i = "legato" === t.rightSlide || "shift" === t.rightSlide,
    o = n[t.string];
  o &&
    !t.tie &&
    (o.addRef({ note: t, beat: e, measure: s }),
    (o.firstRef().note.slideStart = o),
    (o.lastRef().note.slideEnd = o),
    (n[t.string] = void 0)),
    i && (n[t.string] = new Gn({ note: t, beat: e, measure: s }));
}
function Qi(t, e, s, n) {
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
  t.bend && n.set(t.string, new Gn({ note: t, beat: e, measure: s }));
}
function Zi(t, e, s) {
  for (const [t, e] of s.entries())
    if (e.keep) e.keep = !1;
    else {
      e.firstRef().note.bendStart = e;
      for (let t = 1; t < e.refs.length - 1; t++) e.refs[t].note.bendPart = e;
      (e.lastRef().note.bendEnd = e), s.delete(t);
    }
}
function to(t, e, s, n) {
  const i = n[t.string];
  i
    ? t.tie
      ? (i.addRef({ note: t, beat: e, measure: s }),
        (i.firstRef().note.tieStart = i),
        (i.lastRef().note.tieEnd = i),
        (n[t.string] = new Gn({ note: t, beat: e, measure: s })))
      : i.reset({ note: t, beat: e, measure: s })
    : (n[t.string] = new Gn({ note: t, beat: e, measure: s }));
}
function eo(t, e) {
  const s = t.string,
    n = e[s];
  n && ((n.nextNoteOnString = t), (t.prevNoteOnString = n)), (e[s] = t);
}
function so(t, e) {
  if (
    (t.repeatStart && (e = { lastReprise: new Oi(t), inReprise: !0 }),
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
const no = [{ duration: [1, 1], type: 1, rest: !0, notes: [{ rest: !0 }] }],
  io = {
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
function oo(t, e, s) {
  const n = (function (t) {
    return t.hasSignature ? 50 : 15;
  })(e);
  for (const o of s.filter((t) => +t.measure == +e.index + 1)) {
    const s = t
      ? Math.floor(4 * t * o.position)
      : ((i = o.position), Math.floor(11531520 * i));
    let r = e.tempoLayoutsByTime.get(s);
    r ||
      ((r = new Ai(o)),
      (r.measureOffset = n),
      (r.originMeasureOffset = n),
      e.tempoLayoutsByTime.set(s, r));
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
function ro(t, e, s) {
  const n = e.beatsLayoutsByTime;
  let i = (function (t) {
    return t.hasSignature ? 60 : 25;
  })(e);
  const o = [...n.keys()].sort((t, e) => t - e);
  e.beatsLayoutsTimes = o;
  let r = 0,
    a = n.get(0);
  const c = e.rest && !(s && s[e.index] && s[e.index].beats.length > 0);
  if (a) {
    e.beatsLayouts[0] = a;
    for (let s = 1; s < o.length; s++) {
      const l = o[s],
        d = n.get(l);
      d &&
        ((a.x = i),
        (a.originX = i),
        (i += qi(t, l - r, c)),
        (e.beatsLayouts[s] = d),
        (r = l),
        (a = d));
    }
    (a.x = i), (a.originX = i), (i += qi(t, e.duration - r, c));
    const s = e.marker ? e.marker.width : 0;
    e.width = Math.ceil(Math.max(e.width, i, s));
  }
}
const ao = {
    useStdDrumNotation: !1,
    useBendPointsMerge: !0,
    useGenericTimeline: !1,
  },
  co = (t) => t.currentTime;
function lo(t, e) {
  let s;
  for (s = e; t > 1; t--) s += e;
  return s;
}
const uo = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";
function ho() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
    e = "";
  for (; t-- > 0; ) e += uo[(64 * Math.random()) | 0];
  return e;
}
const po = window.performance || {
  offset: Date.now(),
  now: function () {
    return Date.now() - this.offset;
  },
};
function go(t) {
  return t / 1e3;
}
class fo {
  constructor(t) {
    v(this, "onMessage", (t) => {
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
    }),
      (this.state = {
        speed: 100,
        pitchShift: 0,
        cursor: 0,
        loopStart: 0,
        loopEnd: 0,
        type: "focus",
        isPlaying: !1,
        isCountIn: !1,
        isMetronome: !1,
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
          `Audio context changed state to ${this.context.state}, isPlaying: ${this.state.isPlaying}, sample rate ${this.context.sampleRate}`
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
      ((this.worker = new Worker("/static/latest/WebWorker.3d04fa8f.js")),
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
              lo(23, "A") +
              "WGluZwAAAA8AAAACAAACcQCA" +
              lo(16, "gICA") +
              lo(66, "/") +
              "8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" +
              lo(320, "A") +
              "//sQxAADgnABGiAAQBCqgCRMAAgEAH" +
              lo(15, "/") +
              "7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" +
              lo(18, "/") +
              "9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" +
              lo(97, "V") +
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
                      (t) => console.warn("Hack play failed", t)
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
                      () => {},
                      (t) => console.warn("Hack pause failed", t)
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
    return this.context && this.worker && !this.noSound;
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
    var e, s;
    if (this.token !== t.token)
      return void (
        "development" ===
          (null === (e = process) ||
          void 0 === e ||
          null === (s = e.env) ||
          void 0 === s
            ? void 0
            : s.NODE_ENV) &&
        console.log(
          `Drop audio packet with token mismatch: expected ${this.token}, actual ${t.token}`
        )
      );
    const n = this.context;
    if (n.sampleRate !== this.freezeCheckSampleRate)
      return (
        console.warn(
          "SampleRate has changed",
          n.sampleRate,
          this.freezeCheckSampleRate
        ),
        void this.callback.onFreeze()
      );
    this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length;
    const i = this.buffers[this.reuseIndex];
    if (
      (i.copyToChannel
        ? (i.copyToChannel(t.buffer0, 0),
          t.buffer1 && i.copyToChannel(t.buffer1, 1))
        : (i.getChannelData(0).set(t.buffer0),
          t.buffer1 && i.getChannelData(1).set(t.buffer1)),
      !this.gain)
    ) {
      const t = n.createGain();
      (t.gain.value = 1), t.connect(n.destination), (this.gain = t);
    }
    const o = n.createBufferSource();
    (o.buffer = i), o.connect(this.gain), (this.sources[this.reuseIndex] = o);
    let r = 0;
    if (null !== this.startedTime) {
      r = this.startedTime + go(t.timestampMs);
      const e = r - n.currentTime;
      e < 0.2 &&
        (console.log("Ahead of time schedule margin", e),
        console.info(`Sound generation delay ${this.workerDelay}ms`)),
        !this.marginIssueReported &&
          t.timestampMs > 2e3 &&
          (e < 0 && console.log("Ahead of time schedule margin is negative", e),
          e >= 0 &&
            e < 0.2 &&
            console.log("Ahead of time schedule margin is too small", e),
          (this.marginIssueReported = !0));
    } else
      (r = n.currentTime + 0.05),
        (this.startedContextTime = co(n) + 0.05),
        (this.startedTime = r),
        (this.workerDelay = Math.floor(po.now() - this.workerTs)),
        console.info(`Sound generation delay ${this.workerDelay}ms`),
        (function (t, e) {
          if (t) throw new Error(e);
        })(
          0 !== t.timestampMs,
          `Got initial audio packet with unexpected timestamp ${t.timestampMs}`
        );
    o.start(r, 0, go(t.durationMs));
  }
  play() {
    this.resumeContext(),
      (this.marginIssueReported = !1),
      this.shouldUseWorker
        ? this.worker.postMessage([this.startGenerateSoundPackets()])
        : this.startWithoutSound(),
      (this.state = Object.assign({}, this.state, { isPlaying: !0 })),
      this.markIsPlaying();
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
      this.markIsPlaying(),
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
              ((t) => () => {
                try {
                  t.stop();
                } catch (t) {}
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
      (this.startedTime = po.now() / 1e3),
      (this.startedContextTime = this.startedTime);
  }
  updateCountIn(t) {
    let e = null;
    if (((this.countinDuration = 0), this.state.isCountIn)) {
      e = this.findBpmAndBeatByTimestamp(this.state.cursor);
      const s = 48e3,
        n = ((60 / e.bpm) * 4) / e.signature[1];
      (this.countinDuration =
        Math.floor(((n * e.beat * 100) / this.state.speed) * s) / s),
        t || (t = this.generateMetronomeTimeline());
      const i = this.state.cursor;
      let o;
      for (let e = 0; e < t.length; e++)
        if (Math.floor(t[e].timestamp) >= Math.floor(i)) {
          o = t[e];
          break;
        }
      const r = o ? ((o.timestamp - i) * (100 / this.state.speed)) / 1e3 : 0;
      (this.countinDuration -= r),
        (e.correctedDurration = this.countinDuration);
    }
    return e;
  }
  updateMetronome() {
    return this.state.isMetronome ? this.generateMetronomeTimeline() : null;
  }
  startGenerateSoundPackets() {
    this.hack && this.hack.play(),
      (this.token = ho()),
      (this.workerTs = po.now()),
      (this.workerStarted = !0);
    const t = "mute" === this.state.type && this.hasSingleTrack,
      e = this.updateMetronome(),
      s = this.updateCountIn(e);
    return {
      message: "worker/startGenerate",
      token: this.token,
      mute: t,
      countIn: s,
      metronome: e,
    };
  }
  reset(t, e, s, n, i) {
    this.turnOffSound();
    const o = this.state.isPlaying;
    (this.state = Object.assign({}, this.state, {
      cursor: t.cursor,
      loopStart: t.loopStart,
      loopEnd: t.loopEnd,
      speed: e,
      pitchShift: s,
      isPlaying: !1,
      isCountIn: n,
      isMetronome: i,
    })),
      (this.token = ho()),
      this.shouldUseWorker &&
        this.worker.postMessage([
          o && { message: "worker/stopGenerate" },
          { message: "worker/reset" },
          { message: "worker/setSpeed", speed: e },
          { message: "worker/setPitch", pitchShift: s },
          { message: "worker/seek", position: this.getWorkerPosition() },
        ]),
      this.markIsPlaying();
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
  open(t, e) {
    (this.state.url = e),
      this.worker.postMessage([
        { message: "worker/open", url: e, version: t },
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
  setMetronome(t) {
    this.state = Object.assign({}, this.state, { isMetronome: t });
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
  markIsPlaying() {
    const t = document.getElementById("root");
    t && (t.dataset.playing = this.isPlaying ? "on" : "off");
  }
  passed() {
    const { context: t, startedTime: e, countinDuration: s } = this;
    return null === e
      ? 0
      : this.shouldUseWorker
      ? co(t) -
        this.startedContextTime -
        s -
        ((t) =>
          ((t) => ("outputLatency" in t ? t.outputLatency : 0))(t) +
          ((t) => ("baseLatency" in t ? t.baseLatency : 0))(t))(t)
      : po.now() / 1e3 - e - s;
  }
  isPositionChanged() {
    return this.state.isPlaying && this.passed() > 0;
  }
}
const mo = 100;
function yo(t, e) {
  const s = Math.round((e.bpm * t) / 12),
    n = Math.round((100 * t) / 12);
  return { tempo: Object.assign({}, e, { bpm: s }), speed: n, position: Io(n) };
}
function vo(t, e) {
  return yo(Math.round((t / 100) * 12), e);
}
function bo(t, e) {
  return Object.assign({}, e, { bpm: Math.round((e.bpm * t) / 100) });
}
function wo(t, e, s, n) {
  const i = Math.round((t / 100) * 12);
  return i >= 21 ? { tempo: e, speed: t, position: s } : yo(i + 1, n);
}
function So(t, e, s, n) {
  const i = Math.round((t / 100) * 12);
  return i <= 3 ? { tempo: e, speed: t, position: s } : yo(i - 1, n);
}
function Eo(t, e, s, n, i) {
  const o = e.bpm + i,
    r = +((100 * o) / n.bpm).toFixed(2),
    a = Math.round(r);
  return a < 25 || a > 175
    ? { tempo: e, speed: t, position: s }
    : { tempo: Object.assign({}, n, { bpm: o }), speed: r, position: Io(r) };
}
function Io(t) {
  const e = (function (t) {
    return (Math.round((t / 100) * 12) / 12) * 100;
  })(t);
  return +((100 * (e - 25)) / 150).toFixed(6);
}
function xo(t) {
  return Math.round((150 * t) / 100 + 25);
}
const ko =
  window.performance && window.performance.now
    ? window.performance.now.bind(window.performance)
    : Date.now;
function To(t, e) {
  let s;
  return () => {
    clearTimeout(s), (s = setTimeout(() => t.apply(this, arguments), e));
  };
}
function Oo(t, e) {
  let s = !1;
  return (n) => {
    s ||
      (t(n),
      (s = !0),
      setTimeout(() => {
        s = !1;
      }, e));
  };
}
const Ao = ["scroll", "keydown", "click", "mousemove", "mousedown"],
  Po = new (class {
    constructor() {
      v(
        this,
        "trackActivity",
        Oo(() => {
          this.lastActivityTimestampMs = ko();
        }, 200)
      ),
        (this.hasFirstActivity = !1),
        this.reset(),
        this.engage(),
        this.trackFirstActivity();
    }
    engage() {
      for (const t of Ao) window.addEventListener(t, this.trackActivity);
    }
    disengage() {
      for (const t of Ao) window.removeEventListener(t, this.trackActivity);
    }
    reset() {
      this.setIsActive(!1);
    }
    trackFirstActivity() {
      Ao.forEach((t) =>
        window.addEventListener(
          t,
          () => {
            this.hasFirstActivity = !0;
          },
          { once: !0 }
        )
      );
    }
    setIsActive(t) {
      !this.isActive && t
        ? this.disengage()
        : this.isActive && !t && this.engage(),
        (this.lastActivityTimestampMs = ko()),
        (this.isActive = t);
    }
    getTimeSinceLastActivity() {
      return this.isActive
        ? 0
        : Math.round((ko() - this.lastActivityTimestampMs) / 6e4);
    }
  })();
async function Lo(t) {
  if (true) return import("./playerPlus.32aa99cd.js");
}
async function Co(t) {
  const e = t.get();
  if (e.demo.enabled && 27 === e.meta.songId)
    return import("./playerDemo.e975890a.js");
}
function No(t, e) {
  const { player: s } = t.get(),
    n = +((100 * (bo(s.speed, s.tempo).bpm + e)) / s.tempo.bpm).toFixed(2),
    i = Math.round(n);
  i < 25 || i > 175 || Ro(t, n);
}
async function Ro(t, e) {
  try {
    let s = await Lo(t);
    if (s && s.demo && !s.demo()) return s.plusChangeSpeed(t, e);
    if (((s = await Co(t)), s)) return s.demoChangeSpeed(t, e);
  } catch (t) {
    console.error(t);
  }
}
async function jo(t, e) {
  try {
    let s = await Lo(t);
    if (s && s.demo && !s.demo()) return s.plusChangePitch(t, e);
    if (((s = await Co(t)), s)) return s.demoChangePitch(t, e);
  } catch (t) {
    console.error(t);
  }
}
function _o(t, e) {
  let { enabled: s = !1 } = e;
  t("player/suspend", "fullscreen"),
    t("screen/toggleFullscreen", { enabled: s }),
    t("player/resume", "fullscreen");
}
async function Mo(t, e) {
  try {
    let s = await Lo(t);
    if (s && s.demo && !s.demo()) return s.plusChangeType(t, e);
    if (((s = await Co(t)), s)) return s.demoChangeType(t, e);
  } catch (t) {
    console.error(t);
  }
}
function Do(t, e) {
  return (
    t === e ||
    (t.cursor === e.cursor &&
      t.loopStart === e.loopStart &&
      t.loopEnd === e.loopEnd)
  );
}
const Bo = (t) => ({
    player: Object.assign({}, t.player, {
      isAudioFailed: !1,
      isAudioNetworkFailed: !1,
    }),
  }),
  Fo = (t, e) => {
    const s = null != e ? e : !t.player.shouldPlay;
    Po.setIsActive(s);
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
  $o = (t) => {
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
        const e = i.findIndex((e) => e === t);
        -1 !== e && i.splice(e, 1);
      }
      const o = !i.length;
      if (!t.player.canPlay && o)
        return (
          n && !s.isPlaying && s.play(),
          { player: Object.assign({}, t.player, { canPlay: o }) }
        );
    }
    t.on("meta/load:processing", (t, e) => {
      let { songHasChanged: s } = e;
      if (s) {
        const e = { cursor: 0, loopEnd: 0, loopStart: 0 },
          s = t.player.isCountin,
          n = t.player.isMetronome;
        return (
          t.player.audio && t.player.audio.reset(e, 100, 0, s, n),
          {
            player: Object.assign({}, t.player, {
              shouldPlay: !1,
              isCountin: s,
              position: e,
              type: "focus",
              version: "audio",
              pitchShift: 0,
              speed: 100,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1,
            }),
          }
        );
      }
      return t.player.audio.pause(), Bo(t);
    }),
      t.on("chords/load:processing", (t, e) => (t.player.audio.pause(), Bo(t))),
      t.on("meta/load:done", (t, e) => {
        let { current: s } = e;
        t.player.audio.hasSingleTrack = !s.tracks || 1 === s.tracks.length;
      }),
      t.on("part/load:done", (t, e) => {
        let { current: s } = e;
        (t.player.audio.correctTimestampFor50Timeline = (t) =>
          (function (t, e) {
            if (0 === e) return 0;
            const { timestamps: s } = t,
              n = s[s.length - 1];
            if (e <= 0) return Bi(e, t.shifts[0] || 0);
            if (e >= n) return Bi(e, t.shifts[s.length - 1] || 0);
            let i = 0,
              o = s.length,
              r = 0,
              a = 0;
            for (; o - i > 1; ) {
              r = Math.floor((i + o) / 2);
              const t = s[r];
              if (e < t) o = r;
              else {
                if (!(e > t)) {
                  a = r;
                  break;
                }
                i = r;
              }
            }
            return (a = i), Bi(e, t.shifts[a] || 0);
          })(s, t)),
          (t.player.audio.findBpmAndBeatByTimestamp = (t) =>
            (function (t, e) {
              if (!t)
                return (
                  console.error("Broken or empty Part. Count In doest't work."),
                  { bpm: 0, beat: 0, signature: [0, 0] }
                );
              const s = Fi(t, e, "left"),
                n = Ui(t, e).bpm,
                i = s.measureLayout.measure.signature;
              return {
                bpm: n,
                beat: s.measureLayout.measure.signature[0],
                signature: i,
              };
            })(s, t)),
          (t.player.audio.generateMetronomeTimeline = () =>
            ((t) => {
              const e = [];
              let s = 0,
                n = hi;
              const i = (o = t.tpqn)
                ? (t, e) => Ni(t, o, e.bpm)
                : (t, e) =>
                    ((t, e) => Math.floor((he(t) / e.bpm) * e.type * 6e4))(
                      t,
                      e
                    );
              var o;
              for (const o of t.progression) {
                const r = t.measures[o - 1],
                  a = le(r.signature),
                  c = r.duration / a;
                n = r.tempoLayouts.length > 0 ? r.tempoLayouts[0].tempo : n;
                for (let t = 0; t < a; t++) {
                  const o = {
                    accented: 0 === t,
                    timestamp: parseFloat(s.toFixed(4)),
                    signature: r.signature,
                    bpm: n.bpm,
                  };
                  e.push(o), (s += i(c, n));
                }
              }
              return e;
            })(s));
        const n = Ui(s, t.player.position.cursor);
        return { player: Object.assign({}, t.player, { tempo: n }) };
      }),
      t.on("player/open", (t, e) => {
        let { url: s, version: n } = e;
        return (
          t.player.audio.open(n, s),
          {
            player: Object.assign({}, t.player, {
              version: n,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1,
            }),
          }
        );
      }),
      t.on("meta/load:processing", (t) => e(t, "audio")),
      t.on("player/open", (t) => e(t, "audio")),
      t.on("player/load", (t) => e(t, "audio")),
      t.on("player/empty", (t) => e(t, "audio")),
      t.on("player/loaded", (t) => s(t, "audio")),
      t.on("meta/load:processing", (t) => e(t, "model")),
      t.on("part/load:done", (t) => s(t, "model")),
      t.on("player/load", Bo),
      t.on("player/loaded", Bo),
      t.on("player/error", (t, e) => {
        let { isNetworkError: s } = e;
        return {
          player: Object.assign({}, t.player, {
            isAudioFailed: !0,
            isAudioNetworkFailed: s,
          }),
        };
      }),
      t.on("player/error", (t) => s(t, ["playerOpen", "playerLoad"])),
      t.on("player/init", (t, e) => {
        let { audio: s, playbackAvailable: n } = e;
        return {
          player: Object.assign({}, t.player, {
            audio: s,
            playbackAvailable: n,
          }),
        };
      }),
      t.on("player/moveCursor", (t, e) => {
        t.player.audio.seek(e.cursor, e.loopStart, e.loopEnd);
        const s = t.part.current
          ? Ui(t.part.current, e.cursor)
          : t.player.tempo;
        return {
          player: Object.assign({}, t.player, { position: e, tempo: s }),
        };
      }),
      t.on("player/startPlay", (t) => Fo(t, !0)),
      t.on("player/stopPlay", (t) => Fo(t, !1)),
      t.on("player/togglePlay", Fo),
      t.on("player/changeLoop", (t, n) => {
        const i = (n ? e : s)(t, "loop") || t;
        return { player: Object.assign({}, i.player, { isLoopChanging: n }) };
      }),
      t.on("player/toggleLoop", (t) => {
        const e = t.player.audio,
          s = 0 !== t.player.position.loopEnd,
          n = e.getCursor(),
          i = Object.assign({}, t.player, {
            position: { cursor: n, loopStart: 0, loopEnd: 0 },
          });
        if (!s && t.part.current) {
          const e = (function (t, e) {
            const s = Fi(t, e, "left").measureLayout.measure.beatsLayouts;
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
      t.on("player/changeSpeed", (t, e) => {
        let { speed: s } = e;
        const { audio: n } = t.player;
        return (
          n.speed(s), { player: Object.assign({}, t.player, { speed: s }) }
        );
      }),
      t.on("player/changePitch", (t, e) => {
        const { audio: s } = t.player;
        return (
          s.pitch(e), { player: Object.assign({}, t.player, { pitchShift: e }) }
        );
      }),
      t.on("player/changeType", (t, e) => {
        let { type: s } = e;
        const { audio: n } = t.player;
        return n.type(s), { player: Object.assign({}, t.player, { type: s }) };
      }),
      t.on("player/suspend", e),
      t.on("player/resume", s),
      t.on("player/tempoApply", (t, e) => ({
        player: Object.assign({}, t.player, { tempo: e }),
      })),
      t.on("player/toggleCountIn", (t) => {
        const e = Object.assign({}, t.player, {
          isCountin: !t.player.isCountin,
        });
        return e.audio.setCountin(e.isCountin), { player: e };
      }),
      t.on("player/toggleMetronome", (t) => {
        const e = Object.assign({}, t.player, {
          isMetronome: !t.player.isMetronome,
        });
        return e.audio.setMetronome(e.isMetronome), { player: e };
      }),
      t.on("user/signOut", () => {
        !(async function (t) {
          try {
            (await import("./playerFree.7610c8a9.js")).plusRestoreDefaults(t);
          } catch (t) {
            console.error(t);
          }
        })(t);
      }),
      t.on("editor/sound:toggle", (t, e) => {
        let { version: s } = e;
        return { player: Object.assign({}, t.player, { forcedVersion: s }) };
      }),
      t.on("route/change", (t, n) => {
        let { route: i } = n;
        return i.isPanel ? e(t, "isPanel") : s(t, "isPanel");
      });
  };
function Uo() {
  const { layer: t, dispatch: e } = k("layer");
  return (
    t.layer &&
    h("div", {
      className: "Bz8bn",
      onClick: () => e("layer/hide"),
      id: "hide-layer-overlay",
    })
  );
}
const zo = Bt(
    () => import("./ConsentManager.f89bca74.js"),
    [
      "/static/latest/ConsentManager.b937ffb2281dacdd.css",
      "/static/latest/index.8e38cca3af87a066.css",
    ],
    []
  ),
  Go = () => {
    const { consent: t } = k("consent");
    return "tcf" === t.suite
      ? h("div", { children: h(Rt, { component: zo }, "wrap") })
      : null;
  },
  Ho = (t) => true || t.demo.enabled,
  Wo = (t, e) =>
    t.layer.layer === e
      ? t.dispatch("layer/hide")
      : t.dispatch("layer/show", e),
  qo = (t) => t.meta.allowedByLicense,
  Vo = (t) => !t.route.isPanel,
  Xo = (t) => {
    const { current: e } = t.store.get().part;
    return e && !e.usedDrums;
  },
  Yo = (t) => {
    return (
      !(!(e = t.meta.current) || !e.tracks || 1 === e.tracks.length) ||
      (Wo(t, "solo_single"), !1)
    );
    var e;
  },
  Jo = (t) => (e) => !!Ho(e) || (Wo(e, t), !1),
  Ko = (t) => (t.layer.layer && t.dispatch("layer/hide"), !0);
var Qo = T(
  class extends c {
    constructor() {
      super(...arguments),
        v(this, "handleAction", (t, e) => (s) => {
          s.stopPropagation(), s.preventDefault();
          for (const e of t) if (!e(this.props)) return;
          e(s);
        }),
        v(
          this,
          "handleFullscreen",
          this.handleAction([qo, Vo], () => {
            const t = !this.props.screen.fullscreen,
              { dispatch: e } = this.props;
            _o(e, { enabled: t }),
              e("curiosity/google", {
                category: "Player",
                action: t ? "Entered fullscreen" : "Exited fullscreen",
                label: "draw",
                value: "0",
              });
          })
        ),
        v(
          this,
          "handlePlay",
          this.handleAction([qo, Vo, Ko], () => {
            const { store: t } = this.props,
              { meta: e, player: s, user: n } = t.get();
            if (!e.isFailed && hn(e, n)) {
              const { dispatch: t } = this.props;
              !(async function (t, e) {
                t(
                  "player/togglePlay",
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null
                );
              })(t, s.audio),
                t("curiosity/google", {
                  category: "Player",
                  action: s.shouldPlay ? "Pressed pause" : "Pressed play",
                });
            }
          })
        ),
        v(
          this,
          "handleMixer",
          this.handleAction([qo, Vo], () => {
            const { store: t } = this.props,
              { meta: e } = t.get();
            e.current && e.current.tracks && Wo(this.props, "mixer");
          })
        ),
        v(
          this,
          "handleSpeed",
          this.handleAction([qo, Vo, Jo("plus_speed")], () => {
            Wo(this.props, "speed");
          })
        ),
        v(
          this,
          "handleIncreaseBpm",
          this.handleAction([qo, Vo, Jo("plus_speed")], () => {
            No(this.props.store, 1);
          })
        ),
        v(this, "handleChangeSpeed", (t) =>
          this.handleAction([qo, Vo, Jo("plus_speed")], () => {
            Ro(this.props.store, t);
          })
        ),
        v(
          this,
          "handleDecreaseBpm",
          this.handleAction([qo, Vo, Jo("plus_speed")], () => {
            No(this.props.store, -1);
          })
        ),
        v(
          this,
          "handlePitchshift",
          this.handleAction([qo, Vo, Jo("plus_pitchshift"), Ko], () => {
            Wo(this.props, "pitchshift");
          })
        ),
        v(
          this,
          "handleCountin",
          this.handleAction([qo, Vo, Ko], () => {
            !(async function (t) {
              t("player/toggleCountIn");
            })(this.props.dispatch);
          })
        ),
        v(
          this,
          "handleMetronome",
          this.handleAction([qo, Vo, Ko], () => {
            !(async function (t) {
              t("player/suspend", "isMetronome"),
                t("player/toggleMetronome"),
                t("player/resume", "isMetronome");
            })(this.props.dispatch);
          })
        ),
        v(
          this,
          "handleSolo",
          this.handleAction([qo, Vo, Yo, Jo("plus_solo"), Ko], () => {
            const { store: t } = this.props,
              { player: e } = t.get();
            Mo(t, "solo" === e.type ? "focus" : "solo");
          })
        ),
        v(
          this,
          "handleMute",
          this.handleAction([qo, Vo, Jo("plus_mute"), Ko], () => {
            const { store: t } = this.props,
              { player: e } = t.get();
            Mo(t, "mute" === e.type ? "focus" : "mute");
          })
        ),
        v(
          this,
          "handleLoop",
          this.handleAction([qo, Vo, Jo("plus_loop"), Ko], () =>
            (async function (t) {
              try {
                let e = await Lo(t);
                if (e && e.demo && !e.demo()) return e.plusToggleLoop(t);
                if (((e = await Co(t)), e)) return e.demoToggleLoop(t);
              } catch (t) {
                console.error(t);
              }
            })(this.props.store)
          )
        ),
        v(
          this,
          "handlePrint",
          this.handleAction([qo, Vo, Jo("plus_print"), Ko], () => {
            this.props.dispatch("player/togglePlay", !1),
              "chords" === this.props.route.page &&
                this.props.dispatch("curiosity/event", {
                  event: "Printed chords",
                }),
              setTimeout(() => {
                window.print();
              });
          })
        ),
        v(
          this,
          "handleTabEditor",
          this.handleAction([qo, Vo, Xo, Ko], () => {
            const { dispatch: t, layer: e } = this.props,
              s = "tab_editor" !== e.layer;
            s && t("player/stopPlay"),
              Math.random() < 0.05 &&
                t("curiosity/event", {
                  event: "Pressed tab editor",
                  opened: s,
                }),
              t("screener/pressedEditor"),
              Wo(this.props, "tab_editor");
          })
        ),
        v(this, "handleMinimize", () => Ko(this.props)),
        v(
          this,
          "handleNotation",
          this.handleAction([], () => {
            "help_notation" === this.props.layer.layer
              ? this.props.dispatch("layer/hide")
              : this.props.dispatch("layer/show", "help_notation");
          })
        ),
        v(
          this,
          "editorAdminHandler",
          this.handleAction([], () => {
            this.props.dispatch("tabEditor/toggleAdminPanel");
          })
        ),
        v(
          this,
          "handleHide",
          this.handleAction([], () => {
            if (this.props.route.isPanel) {
              const {
                  routeContent: t,
                  meta: e,
                  chords: s,
                  tags: n,
                } = this.props.store.get(),
                i = qe(t, e, s, n);
              this.props.dispatch("navigate", i);
            }
            this.props.layer.layer
              ? this.props.dispatch("layer/hide")
              : this.props.screen.fullscreen &&
                _o(this.props.dispatch, { enabled: !1 });
          })
        );
    }
    componentDidMount() {
      const t = window.hotKeysManager;
      t.bindOne("esc", this.handleHide, { parallel: !0 }),
        t.bindMeta("alt+enter", this.handleFullscreen),
        t.bindMeta("cmd+p", this.handlePrint);
    }
    componentDidCatch(t, e) {
      try {
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(t);
      } catch (t) {}
      console && console.error(t, e);
    }
    render() {
      const { user: t, meta: e, routeContent: n } = this.props,
        i = Ho(this.props),
        o = this.props.screen.isSmall,
        r = this.props.screen.fullscreen,
        a = !e.loading && !!e.current && t.isLoggedIn && !o && t.profile,
        c = !e.loading && !!e.current && t.isLoggedIn && !o,
        l = !true;
      return s(
        "div",
        { className: i ? w.appPlus : w.appFree, id: "app" },
        s(Ze, null),
        !r && s(Je, { isSmallScreen: o }),
        s(Go, null),
        s(As, null),
        s(Fs, null),
        "tab" === n.page &&
          h(Rt, {
            component: Ut,
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
            handleFullscreen: this.handleFullscreen,
            handleIncreaseBpm: this.handleIncreaseBpm,
            handleDecreaseBpm: this.handleDecreaseBpm,
            handleChangeSpeed: this.handleChangeSpeed,
          }),
        "chords" === n.page &&
          h(Rt, {
            component: Ft,
            handlePrint: this.handlePrint,
            handleFullscreen: this.handleFullscreen,
          }),
        ("tag" === n.page || "tags" === n.page) && h(Rt, { component: $t }),
        l && s(Ds, null),
        c && s(os, { meta: e, isAdmin: t.isAdmin }),
        a && s(gn, { profile: t.profile }),
        h(Uo, {})
      );
    }
  },
  "user",
  "screen",
  "layer",
  "route",
  "routeContent",
  "meta",
  "demo"
);
class Zo {
  constructor(t, e) {
    var s = this;
    v(this, "dispatch", function (t) {
      const { events: e } = s,
        n = {};
      let i,
        o = !1;
      for (
        var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), c = 1;
        c < r;
        c++
      )
        a[c - 1] = arguments[c];
      if (e[t])
        for (const r of e[t]) {
          const t = r(s.state, ...a);
          t &&
            ("function" != typeof t.then
              ? (Object.assign(n, t),
                (o = !0),
                (s.state = Object.assign({}, s.state, t)))
              : (i || (i = []), i.push(t)));
        }
      return (
        new Function(
          atob(
            "d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC8oXnwuKlwuKXNvbmdzdGVyclwuKGNvbXxkZXYpJC8pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLnJlbW92ZSgp"
          )
        )(),
        o && s.dispatch("@changed", n),
        i ? Promise.all(i) : void 0
      );
    }),
      (this.events = {}),
      (this.state = e || {});
    for (const e of t) e && e(this);
    e || this.dispatch("@init", 1);
  }
  on(t, e) {
    return (
      (this.events[t] || (this.events[t] = [])).push(e),
      () => {
        this.events[t] = this.events[t].filter((t) => t !== e);
      }
    );
  }
  get() {
    return this.state;
  }
}
const tr = (t) => {
    t.on("meta/load:done", async (e, s) => {
      let { partId: n, current: i } = s;
      if (!un(i, e.device.country)) return;
      const o = i.songId,
        r = i.revisionId,
        a = new nn();
      try {
        const s = e.part.loading;
        if (s) {
          if (o === s.songId && n === s.partId && r === s.revisionId) return;
          s.ac.abort();
        }
        if (
          !e.part.isFailed &&
          e.part.current &&
          o === e.part.songId &&
          n === e.part.partId &&
          r === e.part.revisionId
        )
          return void t.dispatch("part/load:done", {
            songId: o,
            partId: n,
            revisionId: r,
            current: e.part.current,
          });
        await t.dispatch("part/load:processing", {
          songId: o,
          partId: n,
          revisionId: r,
          ac: a,
        });
        const c = [ln(o, r, n, i.image, a.signal)];
        (i.image && !i.lyrics) ||
          c.push(
            (async function (t, e, s, n) {
              const i = `lyrics_${e}_${s || ""}`,
                o = await Hs(i);
              if (o) return o;
              const r = await Ks(
                (n) =>
                  s
                    ? `https://${
                        on[n % on.length]
                      }.cloudfront.net/${t}/${e}/${s}/lyrics.json`
                    : `https://${rn[n % rn.length]}.cloudfront.net/lyrics/${e}`,
                "lyrics",
                n
              );
              return !r || n.aborted ? null : (await Ws(i, r), r);
            })(o, r, i.image, a.signal)
          );
        const [l, d] = await Promise.all(c);
        if (!l || a.signal.aborted) return;
        await t.dispatch("part/load:raw", {
          songId: o,
          partId: n,
          revisionId: r,
          rawPart: l,
          rawLyrics: d,
          signal: a.signal,
        });
      } catch (e) {
        if (a.signal.aborted) return;
        t.dispatch("part/load:error", {
          songId: o,
          partId: n,
          revisionId: r,
          error: e,
        });
      }
    }),
      t.on("meta/load:processing", (t, e) => {
        let { songHasChanged: s } = e;
        if (s) return { part: Object.assign({}, t.part, { current: null }) };
      }),
      t.on("meta/load:processing", (t, e) => {
        let { songId: s, partId: n, revisionId: i } = e;
        const o = t.part.loading;
        if (
          o &&
          (s !== o.songId || (n && n !== o.partId) || i !== o.revisionId)
        )
          return (
            o.ac.abort(), { part: Object.assign({}, t.part, { loading: null }) }
          );
      }),
      t.on("part/load:processing", (t, e) => {
        let { songId: s, partId: n, revisionId: i, ac: o } = e;
        return {
          part: Object.assign({}, t.part, {
            loading: { songId: s, partId: n, revisionId: i, ac: o },
          }),
        };
      }),
      t.on("part/load:raw", (e, s) => {
        let {
          songId: n,
          partId: i,
          revisionId: o,
          rawPart: r,
          rawLyrics: a,
          signal: c,
        } = s;
        const l = {
            useStdDrumNotation: "drop" !== e.experiments.drum_standard_notation,
            useGenericTimeline: "audio" !== e.player.version,
          },
          [d, u] = (function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : ao;
            const n = Object.assign({}, ao, s),
              i = n.useStdDrumNotation,
              o = n.useBendPointsMerge,
              r = n.useGenericTimeline,
              a = new Ti(t, 0, e, i),
              c = new di(0, a, 0),
              l = r ? Ci(a.source.measures) : null,
              d = a.voices || 1,
              u = new Array(d);
            for (let t = 0; t < d; t++)
              u[t] = {
                ties: new Array(a.strings),
                slides: new Array(a.strings),
                slurs: new Array(a.strings),
                bends: new Map(),
                prevBeat: null,
                prevNoteOnString: new Map(),
              };
            let h = [4, 4],
              p = null;
            const g = t.measures.length;
            for (let s = 0; s < g; s++) {
              const n = t.measures[s],
                i = new pi(n, s, h, c.layout, r);
              (a.measures[s] = i),
                i.hasSignature && (h = i.signature),
                oo(l, i, a.automations.tempo),
                (p = so(i, p));
              const d = n.voices.length;
              for (let t = 0; t < d; t++) {
                const e = n.voices[t],
                  s = new Pi(e, t);
                if (((i.voices[t] = s), 0 !== t && e.rest)) continue;
                i.rhythmLines += i.rest || s.hasSameRhythm ? 0 : 1;
                const r = u[t];
                let c = 0;
                const d = e.beats && e.beats.length ? e.beats : no;
                for (let e = 0; e < d.length; e++) {
                  const n = d[e];
                  let u = i.beatsLayoutsByTime.get(c);
                  u || ((u = new Dn(i.layout)), i.beatsLayoutsByTime.set(c, u));
                  const h = new Mn(n, e, u);
                  r.prevBeat &&
                    ((r.prevBeat.nextBeat = h), (h.prevBeat = r.prevBeat)),
                    (r.prevBeat = h),
                    (s.beats[e] = h),
                    (h.voice = t),
                    u.beats.unshift(h),
                    (c += l ? pe(n.duration, l) : ue(n.duration));
                  const p = [];
                  for (let t = 0; t < a.strings; t++) p[t] = !1;
                  const g = n.notes.length;
                  for (let t = 0; t < g; t++) {
                    const e = n.notes[t],
                      s = new Ei(e, h, t, o);
                    a.usedDrums && (s.string = Si(s.fret, a.isDrumStdOn)),
                      (h.notes[t] = s),
                      (p[s.string] = !0);
                  }
                  if (0 === h.index)
                    for (let t = 0; t < a.strings; t++)
                      if (!1 === p[t]) {
                        const e = h.notes.length,
                          s = new Ei(
                            Object.assign({}, io, { string: t }),
                            h,
                            e,
                            o
                          );
                        (s.bogus = !0), (h.notes[e] = s);
                      }
                  for (let e = 0; e < h.notes.length; e++) {
                    const s = h.notes[e];
                    eo(s, r.prevNoteOnString),
                      Qi(s, h, i, r.bends),
                      Ki(s, h, i, r.slides),
                      Ji(s, h, i, r.slurs),
                      to(s, h, i, r.ties),
                      s.rest || s.bogus
                        ? 0 === t && Vi(h)
                        : (Xi(h, s), Yi(a, s));
                  }
                  Zi(0, 0, r.bends);
                  const f = h.notes.find((t) => t.harmonic);
                  (h.harmonic = f ? f.harmonic : void 0),
                    !a.withChords && h.chord && (a.withChords = !0);
                }
                i.duration = Math.max(i.duration, c);
              }
              if (e) {
                const t = e[s];
                if (t) {
                  const e = new Pi(null, i.voices.length);
                  e.lyrics = !0;
                  let s = 0;
                  const n = t.beats.length;
                  for (let o = 0; o < n; o++) {
                    const n = t.beats[o];
                    let r = i.beatsLayoutsByTime.get(s);
                    r ||
                      ((r = new Dn(i.layout)), i.beatsLayoutsByTime.set(s, r));
                    const a = new Mn(n, o, r);
                    (e.beats[o] = a),
                      r.beats.unshift(a),
                      (s += l ? pe(a.duration, l) : ue(a.duration));
                  }
                  n &&
                    ((i.duration = Math.max(i.duration, s)),
                    i.voices.unshift(e));
                }
              }
              ro(l, i, e);
            }
            a.usedDrums && !a.isDrumStdOn && wi(a.usedDrums);
            try {
              const t = Mi(l, a.measures);
              (a.timeline = t.timeline),
                (a.tempos = t.tempos),
                (a.shifts = t.shifts),
                (a.tpqn = l),
                (a.progression = t.progression),
                (a.timestamps = [...a.timeline.keys()]);
            } catch (t) {
              return [t, a];
            }
            return [null, a];
          })(r, a, l);
        c.aborted ||
          (d
            ? t.dispatch("part/load:error", {
                songId: n,
                partId: i,
                revisionId: o,
                error: d,
              })
            : t.dispatch("part/load:done", {
                songId: n,
                partId: i,
                revisionId: o,
                current: u,
              }));
      }),
      t.on("part/load:done", (t, e) => {
        let { songId: s, partId: n, revisionId: i, current: o } = e;
        return {
          part: Object.assign({}, t.part, {
            current: o,
            songId: s,
            partId: n,
            revisionId: i,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null,
          }),
        };
      }),
      t.on("part/load:done", (t) => {
        try {
          const e = Me(t.meta.current, t.meta.partId, t.meta.revisionId),
            s = new Date();
          s.setTime(s.getTime() + 7776e6),
            (document.cookie = `lastSeenTrack=${e};expires=${s.toUTCString()};path=/`);
        } catch (t) {
          console.error(t);
        }
      }),
      t.on("part/load:error", (t, e) => {
        let { songId: s, partId: n, revisionId: i, error: o } = e;
        return {
          part: Object.assign({}, t.part, {
            current: null,
            songId: s,
            partId: n,
            revisionId: i,
            isFailed: !0,
            isNetworkFailed: o instanceof Js && 0 === o.status,
            isNotFound:
              o instanceof Js && (404 === o.status || 400 === o.status),
            loading: null,
          }),
        };
      }),
      t.on("part/load:error", (t, e) => {
        let { error: s } = e;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(s),
          console.error(s);
      });
  },
  er = "undefined" != typeof window && !!window.requestAnimationFrame,
  sr = (t) => (t < 100 ? 50 : 100);
async function nr(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  (n = n || { method: "post", credentials: "include" }),
    (s = Object.assign({}, s, {
      Accept: "application/json",
      "Content-Type": "application/json",
    }));
  const i = JSON.stringify(e);
  return fetch(t, Object.assign({}, n, { headers: s, body: i }));
}
function ir(t) {
  if (!t.ok) throw new Js(t.status, t.statusText);
}
async function or(t, e) {
  if (406 === t.status) throw new Ys(e);
}
function rr(t, e) {
  if (403 === t.status) throw new qs({ __all__: e }, e);
}
async function ar(t) {
  if (406 === t.status) {
    const e = await t.json();
    throw new qs(e, e.message);
  }
}
async function cr(t) {
  if (412 === t.status) {
    const e =
        "Please wait for reCAPTCHA logo to appear in the lower right corner",
      s = await t.json();
    throw new qs({ __all__: e }, s.message);
  }
}
async function lr(t) {
  if (422 === t.status) {
    const e = await t.json();
    throw new qs(e.message || e.data || e);
  }
}
async function dr(t) {
  if ([400, 422, 423].includes(+t.status)) {
    const e = await t.json();
    throw 423 === t.status ? new Vs(e.reasons) : new qs(e.reasons || e);
  }
}
async function ur(t) {
  if (!t.ok && 409 !== t.status)
    throw new Error("Oops, something went wrong. Please try again later");
}
function hr(t) {
  try {
    return JSON.parse(window.localStorage.getItem(t));
  } catch (t) {
    return null;
  }
}
function pr(t, e) {
  try {
    e
      ? window.localStorage.setItem(t, JSON.stringify(e))
      : window.localStorage.removeItem(t);
  } catch (t) {}
}
var gr = { get: hr, set: pr };
const fr = { solo: "s", focus: "f", mute: "m" },
  mr = (t) => ("next" === t ? "nextAudio" : t);
async function yr(t, e, s, n, i) {
  const o = t.get(),
    r = o.meta.current;
  if (!r) return;
  const { type: a, audio: c, forcedVersion: l } = o.player,
    d = sr(o.player.speed),
    u = "drop" === o.experiments.new_sound,
    h = !(null === c.context || !window.Worker);
  let p = o.player.version,
    g = r[mr(p)];
  if (i || l) {
    const t = i || l,
      e = mr(t);
    r[e]
      ? ((g = r[e]), (p = t))
      : o.user.isLoggedIn &&
        o.user.isAdmin &&
        alert(`${t} sound version not found for this track. Please generate!`);
  }
  if (
    (g || ((p = "audio"), (g = r[mr(p)])),
    u ||
      (r.audioV2 && !l && ((g = r.audioV2), (p = "audioV2")),
      !r.nextAudio ||
        r.audioV2 ||
        r.audio ||
        l ||
        u ||
        ((g = r.nextAudio), (p = "next"))),
    c && g && h && er)
  ) {
    const i = `${e}/${n}/${g}/${d}/${fr[a]}/${s}.opus`;
    t.dispatch("player/open", { url: i, version: p });
  }
}
const vr = (t) => {
    t.on("meta/load:done", (e, s) => {
      let { songId: n, partId: i, current: o } = s;
      if (!un(o, e.device.country)) return;
      if (
        (yr(t, n, i, o.revisionId), "bot" === e.device.type || window.Cypress)
      )
        return;
      const r = !(!o.audio && !o.audioV2) && "next" !== e.player.version,
        a = o && o.audioV2Error,
        c = ((t, e) => {
          const s = t.audioV2Midi,
            n = t.audioV2;
          if (s && n) {
            const t = s.includes(
                (function (t) {
                  return Ge(
                    2,
                    t,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ""
                  );
                })(e)
              ),
              i = n.includes(
                (function (t) {
                  return Ge(
                    2,
                    t,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ""
                  );
                })(e)
              );
            return t && i;
          }
          return !1;
        })(o, "prod");
      if (r && !a && !c)
        try {
          const t = hr("hasUpdatedSound") || [];
          t.includes(o.revisionId) ||
            (pr("hasUpdatedSound", [...t, o.revisionId]),
            (async function (t, e) {
              await nr("/api/sound/update", { revisionId: t });
            })(o.revisionId));
        } catch (t) {}
    });
  },
  br = (t) => ({
    user: {
      profile: t,
      hasPlus: true,
      isAdmin: t.admin,
      hasSubscription: true,
      isLoggedIn: !0,
    },
  });
function wr(t, e) {
  return Object.assign({}, t.user.profile, {
    subscription: e.subscription,
    plan: "PLUS",
  });
}
const Sr = (t) => {
    t.on("user/signIn", (t, e) => br(e)),
      t.on("user/googleSignIn", (t, e) => br(e.profile)),
      t.on("user/signUp", (t, e) => br(e)),
      t.on("user/profile", (t, e) => br(e)),
      t.on("user/signOut", () => ({
        user: {
          profile: null,
          hasPlus: true,
          hasSubscription: !1,
          isAdmin: !1,
          isModerator: !1,
          isLoggedIn: !1,
        },
      })),
      t.on("user/recoverPassword", (t, e) => br(e)),
      t.on("user/subscribePlus", (t, e) => {
        const s = wr(t, e);
        return br(s);
      }),
      t.on("user/cancelPlus", (t, e) => br(e)),
      t.on("user/deactivate", () => ({
        user: {
          profile: null,
          hasPlus: true,
          hasSubscription: !1,
          isAdmin: !1,
          isModerator: !1,
          isLoggedIn: !1,
        },
      }));
  },
  Er = 30,
  Ir = function (t, e) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!document.body)
      switch (t) {
        case "small":
        case "medium":
          return 720;
        default:
          return 850;
      }
    if (s) return e.width - 30;
    const n = Math.max(e.width - 100 - 90, 750),
      i = Math.min(n, 880);
    return i - 30;
  },
  xr = (t) => {
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
  },
  kr = (t) => ({
    isSmall: "small" === t,
    isMedium: "medium" === t,
    isLarge: "large" === t,
    isWide: "wide" === t,
  });
function Tr(t, e) {
  return {
    screen: Object.assign(
      {},
      t.screen,
      {
        fullscreen: e || !1,
        available: Ir(t.screen.screen, t.screen.viewport, e || !1),
      },
      kr(t.screen.screen)
    ),
  };
}
xr("large");
const Or = (t) => {
    t.on("screen/resize", (t, e) => {
      let { screen: s, landscape: n, available: i, viewport: o } = e;
      return {
        screen: Object.assign(
          {},
          t.screen,
          { screen: s, landscape: n, viewport: o, available: i },
          kr(s)
        ),
      };
    }),
      t.on("screen/toggleFullscreen", (t, e) => {
        let { enabled: s } = e;
        return Tr(t, s);
      }),
      t.on("route/change", (t) => Tr(t));
  },
  Ar = (t) => {
    t.on("consent/view", (t, e) => {
      let { suite: s, view: n, options: i } = e;
      return { consent: { suite: s, view: n, options: i } };
    });
  };
async function Pr(t, e) {
  let { meta: s, user: n, message: i, measure: o } = e;
  const r = {
      revisionId: s.current ? s.current.revisionId : 0,
      partId: s.partId,
      personId: n.profile.id,
      personName: n.profile.name,
      measure: o,
      message: i,
    },
    a = await (async function (t) {
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
      await lr(s), ir(s);
      const n = await s.json();
      return Object.assign({}, t, n);
    })(r);
  t("annotations/submit", { annotation: a });
}
async function Lr(t, e) {
  let { meta: s, user: n, id: i, measure: o } = e;
  const r = {
    partId: s.partId,
    revisionId: s.current ? s.current.revisionId : 0,
    personId: n.profile.id,
    id: i,
    measure: o,
  };
  await (async function (t) {
    const e = `/api/annotation/${t}`,
      s = await fetch(e, { method: "delete", credentials: "include" });
    return await lr(s), { annotationRemoved: !!s.ok };
  })(i),
    t("annotations/remove", { form: r });
}
const Cr = (t) => {
  t.on("meta/load:done", async (e, s) => {
    let { current: n } = s;
    if (e.device.isPhone) return;
    if (!un(n, e.device.country)) return;
    const i = new nn(),
      o = n.songId,
      r = n.revisionId;
    try {
      const s = e.annotations.loading;
      if (s) {
        if (o === s.songId && r === s.revisionId) return;
        s.ac.abort();
      }
      if (
        !e.annotations.isFailed &&
        o === e.annotations.songId &&
        r === e.annotations.revisionId
      )
        return;
      await t.dispatch("annotations/load:processing", {
        songId: o,
        revisionId: r,
        ac: i,
      });
      const n = await (async function (t, e) {
        const s = `/api/revision/${t}/annotations`;
        return Ks(() => s, "annotations", e);
      })(r, i.signal);
      if (!n || i.signal.aborted) return;
      await t.dispatch("annotations/load:done", {
        songId: o,
        revisionId: r,
        annotations: n,
      });
    } catch (e) {
      if (i.signal.aborted) return;
      t.dispatch("annotations/load:error", {
        songId: o,
        revisionId: r,
        error: e,
      });
    }
  }),
    t.on("meta/load:processing", (t, e) => {
      let { songId: s, revisionId: n } = e;
      const i = t.annotations.loading;
      if (i && (s !== i.songId || n !== i.revisionId))
        return (
          i.ac.abort(),
          { annotations: Object.assign({}, t.annotations, { loading: null }) }
        );
    }),
    t.on("annotations/load:processing", (t, e) => {
      let { songId: s, revisionId: n, ac: i } = e;
      return {
        annotations: Object.assign({}, t.annotations, {
          parts: {},
          loading: { songId: s, revisionId: n, ac: i },
        }),
      };
    }),
    t.on("annotations/load:done", (t, e) => {
      let { songId: s, revisionId: n, annotations: i } = e;
      return {
        annotations: Object.assign({}, t.annotations, {
          parts: i,
          songId: s,
          revisionId: n,
          loading: null,
          isFailed: !1,
        }),
      };
    }),
    t.on("annotations/load:error", (t, e) => {
      let { songId: s, revisionId: n } = e;
      return {
        annotations: Object.assign({}, t.annotations, {
          parts: {},
          songId: s,
          revisionId: n,
          isFailed: !0,
          loading: null,
        }),
      };
    }),
    t.on("annotations/load:error", (t, e) => {
      let { error: s } = e;
      "Sentry" in window &&
        "function" == typeof window.Sentry.captureException &&
        window.Sentry.captureException(s),
        console.error(s);
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
    t.on("annotations/submit", (t, e) => {
      let { annotation: s } = e;
      const { partId: n, measure: i } = s;
      delete s.partId, delete s.measure, delete s.revisionId;
      const o = t.annotations.parts;
      return (
        (o[n] = o[n] || {}),
        (o[n][i] = o[n][i] || []),
        o[n][i].push(s),
        { annotations: Object.assign({}, t.annotations, { parts: o }) }
      );
    }),
    t.on("annotations/remove", (t, e) => {
      let { form: s } = e;
      const { partId: n, id: i, measure: o } = s,
        r = t.annotations.parts,
        a = r[n][o];
      return (
        a.splice(
          a.findIndex((t) => t.id === i),
          1
        ),
        a || delete r[n][o],
        { annotations: Object.assign({}, t.annotations, { parts: r }) }
      );
    });
};
function Nr(t) {
  return 6e4 / t / 4;
}
class Rr {
  static forSkillTestResults(t, e, s) {
    function n(t) {
      return 6e4 / t / 4;
    }
    const i = n(t),
      o = n(e),
      r = n(s);
    return new Rr({
      VERY_EASY: { name: "VERY_EASY", rh: 4 * i, lh: 4 * o, legato: 4 * r },
      EASY: { name: "EASY", rh: 2 * i, lh: 2 * o, legato: 2 * r },
      BELOW_INTERMEDIATE: {
        name: "BELOW_INTERMEDIATE",
        rh: 1.5 * i,
        lh: 1.5 * o,
        legato: 1.5 * r,
      },
      INTERMEDIATE: {
        name: "INTERMEDIATE",
        rh: 1.25 * i,
        lh: 1.25 * o,
        legato: 1.25 * r,
      },
      UPPER_INTERMEDIATE: {
        name: "UPPER_INTERMEDIATE",
        rh: 1.1 * i,
        lh: 1.1 * o,
        legato: 1.1 * r,
      },
      HARD: { name: "HARD", rh: i, lh: o, legato: r },
      VERY_HARD: {
        name: "VERY_HARD",
        rh: 0.9 * i,
        lh: 0.9 * o,
        legato: 0.9 * r,
      },
      INSANE: { name: "INSANE", rh: 0.8 * i, lh: 0.7 * o, legato: 0.7 * r },
    });
  }
  constructor(t) {
    Object.keys(t).forEach((e) => {
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
  increment(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    const s = this.indexOf(t);
    if (-1 === s) throw new Error(`Unable to find complexity ${t}`);
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
        throw new Error(`Unable to find complexity for lookup property ${t}`);
      if (0 === n) {
        if (e >= o) return i;
      } else if (n === s.length - 1) {
        if (e <= o) return i;
      } else if (e <= o) return i;
    }
    return s[0];
  }
}
const jr = new Rr({
    VERY_EASY: { name: "VERY_EASY", rh: Nr(60), lh: Nr(41), legato: Nr(20) },
    EASY: { name: "EASY", rh: Nr(90), lh: Nr(50), legato: Nr(45) },
    BELOW_INTERMEDIATE: {
      name: "BELOW_INTERMEDIATE",
      rh: Nr(120),
      lh: Nr(65),
      legato: Nr(70),
    },
    INTERMEDIATE: {
      name: "INTERMEDIATE",
      rh: Nr(160),
      lh: Nr(80),
      legato: Nr(95),
    },
    UPPER_INTERMEDIATE: {
      name: "UPPER_INTERMEDIATE",
      rh: Nr(210),
      lh: Nr(110),
      legato: Nr(125),
    },
    HARD: { name: "HARD", rh: Nr(250), lh: Nr(136), legato: Nr(143) },
    VERY_HARD: { name: "VERY_HARD", rh: Nr(281), lh: Nr(140), legato: Nr(150) },
    INSANE: { name: "INSANE", rh: Nr(290), lh: Nr(150), legato: Nr(160) },
  }),
  _r = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  Mr = [43, 38, 33, 28],
  Dr = [43, 38, 33, 26],
  Br = [43, 38, 33, 28, 23],
  Fr = [48, 43, 38, 33, 28, 23],
  $r = [64, 59, 55, 50, 45, 40],
  Ur = [64, 59, 55, 50, 45, 38],
  zr = [64, 59, 55, 50, 45, 40, 35],
  Gr = {
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
function Hr(t, e) {
  return t.map((t) => t + e);
}
function Wr(t) {
  let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return t.map((t) => {
    const s = Math.floor(t / 12) - 1;
    return _r[t % 12] + (e ? s : "");
  });
}
function qr(t, e) {
  const s = (function (t, e) {
    if (ve(t)) {
      if (6 === e.length) return e[3] === e[5] + 12 ? Ur : $r;
      if (7 === e.length) return zr;
    } else if (be(t)) {
      if (4 === e.length) return e[1] === e[3] + 12 ? Dr : Mr;
      if (5 === e.length) return Br;
      if (6 === e.length) return Fr;
    }
    return e;
  })(t, e);
  if (s) {
    const t = s[0] - e[0];
    for (let n = 0; n < s.length; n++) if (e[n] + t !== s[n]) return;
    return { tuningName: Vr(s), pitch: t, standard: s };
  }
}
function Vr(t) {
  const e = Wr(t).reverse().join(" "),
    s = Wr(t, !1).reverse().join(" ");
  if (t.length in Gr && e in Gr[t.length]) return Gr[t.length][e];
  const n = s.split(" ");
  return n.map((t, e) => (e === n.length - 1 ? t.toLowerCase() : t)).join(" ");
}
function Xr(t) {
  return Wr(t, !1).reverse().join(" ");
}
const Yr = ["ALL INSTRUMENTS", "GUITAR", "BASS", "DRUMS"],
  Jr = ["Any Difficulty", "Beginner", "Intermediate", "Advanced"],
  Kr = {
    instrument: "ALL INSTRUMENTS",
    difficulty: "Any Difficulty",
    tunings: {},
  },
  Qr = [
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
  Zr = (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
function ta(t) {
  const e = [];
  function s(t, s) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      i = arguments.length > 3 ? arguments[3] : void 0;
    0 !== n && (s = Hr(s, n)), (i = i || "ALL INSTRUMENTS");
    const o = Wr(s).join(","),
      r = `${i}:${o}`,
      a = Xr(s);
    e.push([`${t} (${a})`, r]);
  }
  function n() {
    s("Standard 6-string", $r, 0, "GUITAR"),
      s("Standard 7-string", zr, 0, "GUITAR"),
      s("Drop D", Ur, 0, "GUITAR"),
      s("Drop C#", Ur, -1, "GUITAR"),
      s("Drop C", Ur, -2, "GUITAR"),
      s("Drop B", Ur, -3, "GUITAR"),
      s("Drop A#", Ur, -4, "GUITAR"),
      s("Drop A", Ur, -5, "GUITAR"),
      s("Drop G#", Ur, -6, "GUITAR"),
      s("Drop G", Ur, -7, "GUITAR"),
      s("Drop F#", Ur, -8, "GUITAR"),
      s("Drop F", Ur, -9, "GUITAR");
  }
  if ((e.push([Zr("ALL TUNINGS"), "ALL TUNINGS"]), "BASS" === t)) {
    s("Standard 4-string", Mr, 0, "BASS"),
      s("Standard 5-string", Br, 0, "BASS"),
      s("Standard 6-string", Fr, 0, "BASS"),
      s("Drop D", Dr, 0, "BASS"),
      s("Drop C#", Dr, -1, "BASS"),
      s("Drop C", Dr, -2, "BASS"),
      s("Drop B", Dr, -3, "BASS"),
      s("Drop A#", Dr, -4, "BASS"),
      s("Drop A", Dr, -5, "BASS");
    for (let t = 1; t <= 7; t++) s(`${t} st down`, Mr, -t, "BASS");
  } else if ("GUITAR" === t) {
    n();
    for (let t = 1; t <= 7; t++) s(`${t} st down`, $r, -t, "GUITAR");
  } else if ("ALL INSTRUMENTS" === t) {
    n();
    for (let t = 1; t <= 7; t++) s(`${t} st down`, $r, -t, "GUITAR");
    s("Bass: 4-string", Mr, 0, "BASS"),
      s("Bass: 5-string", Br, 0, "BASS"),
      s("Bass: 6-string", Fr, 0, "BASS"),
      s("Bass: Drop D", Dr, 0, "BASS"),
      s("Bass: Drop C#", Dr, -1, "BASS"),
      s("Bass: Drop C", Dr, -2, "BASS"),
      s("Bass: Drop B", Dr, -3, "BASS"),
      s("Bass: Drop A#", Dr, -4, "BASS"),
      s("Bass: Drop A", Dr, -5, "BASS");
  }
  return e;
}
function ea(t) {
  const e = t.split(":");
  return [
    e[0],
    ((s = e[1].split(",")),
    s.map((t) => {
      const e = +t.slice(-1),
        s = t.substring(0, t.length - 1);
      return _r.indexOf(s) + 12 * (e + 1);
    })).join(","),
  ];
  var s;
}
function sa(t, e) {
  if ("ALL TUNINGS" === e) return t;
  const [s, n] = ea(e);
  return t.filter((t) =>
    (function (t) {
      const e = t.tracks;
      if (e)
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          if (void 0 !== i.tuning && i.tuning.join(",") === n) {
            if ("BASS" === s && be(i.instrumentId)) return !0;
            if ("GUITAR" === s && ve(i.instrumentId)) return !0;
          }
        }
      return !1;
    })(t)
  );
}
function na(t, e) {
  function s(t, e) {
    const s = t.tracks;
    if (s)
      for (let t = 0; t < s.length; t++) if (e(s[t].instrumentId)) return !0;
    return !1;
  }
  return t.filter((t) => {
    if ("BASS" === e) return s(t, be);
    if ("DRUMS" === e) return s(t, ye);
    if ("GUITAR" === e) return s(t, ve);
    if ("ALL INSTRUMENTS" === e) return !0;
    throw new Error(`Invalid instrument filter value (${e})`);
  });
}
const ia = (t) => (t.difficulty ? t.difficulty : null);
function oa(t, e, s) {
  return (function (t, e) {
    return "none" !== e
      ? t.slice().sort((t, s) => {
          const n = ia(t),
            i = ia(s);
          let o = jr.VERY_EASY,
            r = jr.VERY_EASY;
          null !== n && (o = jr.forName(n)), null !== i && (r = jr.forName(i));
          const a = "asc" === e ? jr.compare(o, r) : jr.compare(r, o);
          return 0 === a
            ? (function (t, e) {
                const s = la(t),
                  n = la(e);
                return s < n ? -1 : s > n ? 1 : 0;
              })(s, t)
            : a;
        })
      : t;
  })(
    (function (t, e) {
      if (t)
        return "Any Difficulty" === e
          ? t.slice()
          : t.slice().filter((t) => {
              if (!t.difficulty) return !1;
              const s = jr.forName(t.difficulty);
              if (null === s) return !1;
              if ("Beginner" === e) return jr.compare(s, jr.EASY) <= 0;
              if ("Intermediate" === e) {
                const t = jr.compare(s, jr.BELOW_INTERMEDIATE) >= 0,
                  e = jr.compare(s, jr.HARD) < 0;
                return t && e;
              }
              return "Advanced" === e && jr.compare(s, jr.HARD) >= 0;
            });
    })(t, s),
    e
  );
}
function ra(t, e) {
  return Object.assign({}, t, { difficulty: e });
}
function aa(t, e) {
  return Object.assign({}, t, { instrument: e });
}
function ca(t, e, s) {
  const n = Object.assign({}, t, { tunings: Object.assign({}, t.tunings) });
  return (n.tunings[e] = s), n;
}
function la(t) {
  return t.tracks
    ? 0 === t.tracks.length
      ? 0
      : t.tracks[t.defaultTrack].views
    : 0;
}
function da(t) {
  const e = t.tunings[t.instrument];
  return (
    (e && "ALL TUNINGS" !== e) ||
    "ALL INSTRUMENTS" !== t.instrument ||
    "Any Difficulty" !== t.difficulty
  );
}
function ua(t) {
  return "ALL INSTRUMENTS" !== t && "GUITAR" !== t;
}
function ha(t) {
  return "DRUMS" === t;
}
function pa(t) {
  const e = t.tunings[t.instrument];
  return {
    difficulty: "Any Difficulty" !== t.difficulty ? t.difficulty : null,
    instrument: "ALL INSTRUMENTS" !== t.instrument ? t.instrument : null,
    tuning: e && "ALL TUNINGS" !== e ? ea(e)[1] : null,
  };
}
function ga(t) {
  return ye(t) ? 1024 : be(t) ? 32 : 24;
}
function fa(t, e) {
  const s = (function (t) {
    return ye(t) ? ye : be(t) ? be : ve;
  })(e);
  return (
    t &&
    t.map((t) => {
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
function ma(t, e) {
  if (t.difficulty !== e.difficulty && t.instrument !== e.instrument) return !1;
  const s = t.tunings[t.instrument],
    n = e.tunings[e.instrument];
  return (!s && !n) || s === n;
}
const ya = (t) => (
  t.sort((t, e) => {
    const s = t.artist.localeCompare(e.artist);
    return 0 === s ? t.title.localeCompare(e.title) : s;
  }),
  t
);
function va(t) {
  try {
    const e = t.tracks;
    if (!e || !e.length) return;
    const s = e.filter((t) => ve(t.instrumentId) && t.difficulty);
    let n = -1;
    Number.isInteger(t.defaultTrack) && ve(e[t.defaultTrack].instrumentId)
      ? (t.difficulty = e[t.defaultTrack].difficulty)
      : (s.forEach((t, e) => {
          (-1 === n || (t.views || 0) > (s[n].views || 0)) && (n = e);
        }),
        -1 !== n && (t.difficulty = s[n].difficulty));
  } catch (t) {
    console.error(t);
  }
}
function ba(t) {
  return (
    t.forEach(va),
    t.forEach((t) => {
      t.title = (function (t) {
        try {
          const s = t.split(" ");
          for (let t = 0; t < s.length; t++)
            0 !== t && t !== s.length - 1 && Qr.includes(s[t].toLowerCase())
              ? (s[t] = s[t].toLowerCase())
              : (s[t] = (e = s[t]).charAt(0).toUpperCase() + e.slice(1));
          return s.join(" ");
        } catch {
          return t;
        }
        var e;
      })(t.title);
    }),
    t
  );
}
async function wa(t, e, s, n, i, o) {
  const r = (function (t, e, s, n) {
      const i = !e.instrument || "GUITAR" === e.instrument,
        o = (e.instrument && e.instrument.toLowerCase()) || void 0,
        r = e.tuning || void 0,
        a =
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
        c = { size: s.toString() };
      return (
        n && (c.from = n.toString()),
        t && (c.pattern = t),
        o && (c.inst = o),
        a && (c.difficulty = a),
        r && (c.tuning = r),
        q(c)
      );
    })(e, s, i, o),
    a = await fetch(`${t}${r}`, { signal: n, credentials: "omit" });
  if (n && n.aborted) return [];
  ir(a);
  const c = ba(await a.json());
  return n && n.aborted ? [] : c;
}
function Sa(t, e) {
  try {
    const s = document.getElementById(e);
    if (!s) return;
    const n = s.getBoundingClientRect(),
      { marginTop: i, marginBottom: o } = getComputedStyle(s),
      r = n.height + parseInt(i, 10) + parseInt(o, 10);
    if (n.top + r < 0) {
      const e = document.getElementById(t);
      e && "function" == typeof e.scroll && e.scroll(0, r);
    }
  } catch (t) {
    console.error(t);
  }
}
const Ea = (t) => {
  async function e(e, s) {
    if (s && !e.artist.songs.hasMore) return;
    const n = e.artist.id,
      i = e.artist.pattern,
      o = e.artist.filters;
    let r = 0,
      a = null;
    s &&
      e.artist.songs.pattern === e.artist.pattern &&
      ma(e.artist.songs.filters, e.artist.filters) &&
      ((a = e.artist.songs.list), (r = a.length));
    const c = new nn();
    try {
      t.dispatch("artist/load:processing", {
        id: n,
        pattern: i,
        filters: o,
        ac: c,
      });
      let s = await (function (t, e, s, n) {
        return wa(
          `/api/artist/${t}/songs`,
          e,
          s,
          n,
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
        );
      })(n, i, pa(o), c.signal, 50, r);
      if (c.signal.aborted) return;
      const l = e.artist.defaultInstrument;
      da(o) || (s = fa(s, l));
      let d = null;
      if (!e.artist.artists[n])
        if (s.length) d = { artistId: s[0].artistId, name: s[0].artist };
        else if (
          ((d = await (async function (t, e) {
            const s = `/api/artist/${t}`,
              n = await Ks(() => s, "artist", e);
            return e.aborted || !n ? null : n;
          })(n, c.signal)),
          c.signal.aborted)
        )
          return;
      const u = (a ? a.length : 0) + s.length,
        h = 50 === s.length && u < 1e3;
      t.dispatch("artist/load:done", {
        id: n,
        songs: a ? [...a, ...s] : s,
        hasMore: h,
        artist: d,
        pattern: i,
        filters: o,
        defaultInstrument: l,
      }),
        a ||
          requestAnimationFrame(() => {
            Sa("panel-artist", "top");
          });
    } catch (e) {
      if (c.signal.aborted) return;
      console.error(e),
        t.dispatch("artist/load:error", {
          id: n,
          error: e,
          pattern: i,
          filters: o,
        });
    }
  }
  const s = (t) => e(t, !1);
  t.on("artist/load:processing", (t, e) => {
    let { id: s, pattern: n, filters: i, ac: o } = e;
    const r = t.artist.loading;
    r && r.ac.abort();
    let a = t.artist.songs;
    return (
      a.id !== s &&
        (a = {
          id: s,
          list: [],
          defaultInstrument: 24,
          hasMore: !0,
          pattern: n,
          filters: i,
        }),
      {
        artist: Object.assign({}, t.artist, {
          songs: a,
          loading: { id: s, filters: i, pattern: n, ac: o },
        }),
      }
    );
  }),
    t.on("artist/load:done", (t, e) => {
      let {
        id: s,
        songs: n,
        hasMore: i,
        artist: o,
        pattern: r,
        filters: a,
        defaultInstrument: c,
      } = e;
      const l = t.artist.loading;
      if (!l || l.id !== s || !ma(l.filters, a) || l.pattern !== r) return;
      let d = t.artist.artists;
      return (
        o && (d = Object.assign({}, d, { [o.artistId]: o.name })),
        {
          artist: Object.assign({}, t.artist, {
            songs: {
              id: s,
              list: n,
              defaultInstrument: c,
              hasMore: i,
              pattern: r,
              filters: a,
            },
            artists: d,
            loading: null,
          }),
        }
      );
    }),
    t.on("artist/load:error", (t, e) => {
      let { id: s, error: n, pattern: i, filters: o } = e;
      const r = t.artist.loading;
      if (r && r.id === s && ma(r.filters, o) && r.pattern === i)
        return { artist: Object.assign({}, t.artist, { loading: null }) };
    }),
    t.on("meta/load:done", (t, e) => {
      let { current: s } = e;
      return {
        artist: Object.assign({}, t.artist, {
          artists: Object.assign({}, t.artist.artists, {
            [s.artistId]: s.artist,
          }),
        }),
      };
    }),
    t.on("chords/load:done", (t, e) => {
      let { current: s } = e;
      return {
        artist: Object.assign({}, t.artist, {
          artists: Object.assign({}, t.artist.artists, {
            [s.artistId]: s.artist,
          }),
        }),
      };
    }),
    t.on("artist/filter", (t, e) => {
      let { id: s, pattern: n, filters: i } = e;
      return {
        artist: Object.assign({}, t.artist, { pattern: n, filters: i, id: s }),
      };
    }),
    t.on("artist/filter", s),
    t.on("songs/default", (t, e) => {
      let { instrumentId: s } = e;
      const n = ga(s);
      let i = t.artist.songs.list;
      return (
        da(t.artist.songs.filters) ||
          t.artist.songs.defaultInstrument === n ||
          (i = fa(t.artist.songs.list, n)),
        {
          artist: Object.assign({}, t.artist, {
            songs: Object.assign({}, t.artist.songs, {
              list: i,
              defaultInstrument: n,
            }),
            defaultInstrument: n,
          }),
        }
      );
    }),
    t.on("artist/more", (t) => e(t, !0)),
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
    t.on("artist/filter/tuning", (t, e) => {
      let { instrument: s, tuning: n } = e;
      return {
        artist: Object.assign({}, t.artist, {
          filters: ca(t.artist.filters, s, n),
        }),
      };
    }),
    t.on("artist/filter/tuning", s),
    t.on("artist/filter/reset", (t) => ({
      artist: Object.assign({}, t.artist, { filters: Kr }),
    })),
    t.on("artist/filter/reset", s),
    t.on("route/change", (e, s) => {
      let { route: n, query: i } = s;
      if ("artist" === (null == n ? void 0 : n.page)) {
        const s = +n.artistId,
          o = (null == i ? void 0 : i.pattern) || "",
          r = {
            instrument: null != i && i.inst ? et(i.inst) : "ALL INSTRUMENTS",
            tunings: e.artist.filters.tunings,
            difficulty: e.artist.filters.difficulty,
          };
        (e.artist.songs.list.length &&
          e.artist.songs.id === s &&
          e.artist.songs.pattern === o &&
          ma(e.artist.songs.filters, r)) ||
          t.dispatch("artist/filter", { id: s, pattern: o, filters: r });
      }
    });
};
function Ia(t) {
  const e = true,
    s = t.subscription || null,
    n = "lifetime" === t.sra_license,
    i = !!s && s.isPayPal,
    o = s ? s.startDate : null,
    r = s ? s.cancellationDate : null,
    a =
      o && r
        ? (function (t) {
            const e = new Date(t);
            return e.setDate(e.getDate() + 30), new Date(e).toISOString();
          })(r)
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
    planCancelDate: r,
    planEndDate: a,
  };
}
async function xa() {
  const t = await nr("/auth/promo/sra");
  return (
    rr(t, "Cannot be applied. Please contact support"),
    await (async function (t) {
      if (409 === t.status) {
        const e = await t.json();
        throw new qs({ __all__: e.message }, e.message);
      }
    })(t),
    await lr(t),
    await ar(t),
    ir(t),
    Ia(await t.json())
  );
}
async function ka(t, e, s) {
  const n = `/auth/billing/${s}`,
    i = { "X-Recaptcha-Token": await R(s) },
    o = { nonce: t, deviceData: e },
    r = await nr(n, o, i);
  return (
    (function (t) {
      if (403 === t.status) throw new Xs();
    })(r),
    await cr(r),
    await lr(r),
    await ar(r),
    ir(r),
    Ia(await r.json())
  );
}
async function Ta() {
  const t = await fetch("/auth/billing/cancel", {
    method: "post",
    credentials: "include",
  });
  if (500 === t.status || 403 === t.status)
    throw new Error("You have no subscription");
  return await lr(t), await ar(t), ir(t), Ia(await t.json());
}
async function Oa() {
  const t = await fetch("/auth/deactivate", {
    method: "post",
    credentials: "include",
  });
  if (403 === t.status)
    throw new Error("You already signed out. Please refresh page");
  return ir(t), t.text();
}
function Aa() {
  const { dispatch: t, store: e } = k(),
    { payment: s } = e.get();
  p(() => {
    Pa(s, t);
  }, []);
}
async function Pa(t, e) {
  if (!t.dropin.loading && !t.dropin.ready)
    try {
      e("dropin/init:processing");
      const t = (async function () {
          const t = await fetch("/auth/billing/token", {
            method: "get",
            credentials: "include",
          });
          return await lr(t), ir(t), t.json();
        })(),
        s = import("./dropin.4d4c7fc8.js"),
        [n, i] = await Promise.all([s, t]);
      e("dropin/init:done", { module: n, token: i });
    } catch (t) {
      e("dropin/init:error", t);
    }
}
const La = (t) => {
    t.on("dropin/init:processing", (t) => ({
      payment: {
        dropin: Object.assign({}, t.payment.dropin, { loading: !0, ready: !1 }),
      },
    })),
      t.on("dropin/init:done", (t, e) => {
        let { module: s, token: n } = e;
        return {
          payment: {
            dropin: Object.assign({}, t.payment.dropin, {
              loading: !1,
              ready: !0,
              error: null,
              module: s,
              token: n,
            }),
          },
        };
      }),
      t.on("dropin/init:error", (t, e) => ({
        payment: {
          dropin: Object.assign({}, t.payment.dropin, {
            error: e,
            loading: !1,
          }),
        },
      })),
      t.on("user/signOut", () => ({
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
      t.on("user/signIn", (e) => Pa(e.payment, t.dispatch)),
      t.on("user/signUp", (e) => Pa(e.payment, t.dispatch)),
      t.on("user/googleSignIn", (e) => Pa(e.payment, t.dispatch));
  },
  Ca = (t) => {
    t.on("experiments/activate", async (e, s) => {
      const n = await (async function (t) {
        const e = `/experiment/${t}/activate`,
          s = await nr(e);
        return ir(s), s.json();
      })(s);
      n[s] && t.dispatch("experiments/set", { experimentName: s, value: n[s] });
    }),
      t.on("experiments/set", (t, e) => {
        let { experiments: s } = t,
          { experimentName: n, value: i } = e;
        const o = Object.assign({}, s);
        return (o[n] = i), { experiments: o };
      });
  };
async function Na(t, e) {
  try {
    t("favorites/load:processing"),
      t(
        "favorites/load:done",
        await (async function (t) {
          const e = await fetch("/api/favorites", { credentials: "include" });
          ir(e);
          const s = await e.json();
          return ba(ya(s));
        })()
      );
  } catch (e) {
    console.error("favorites/load:error", e), t("favorites/load:error", e);
  } finally {
    t("meta/setWasFavoriteOnServerRender", void 0);
  }
}
const Ra = (t, e) => {
    const s = t.findIndex((t) => t.songId === e);
    return t.slice(0, s).concat(t.slice(s + 1));
  },
  ja = (t, e) => ya([...t, e]),
  _a = (t) => {
    t.on("user/signIn", async () => Na(t.dispatch)),
      t.on("user/googleSignIn", async () => Na(t.dispatch)),
      t.on("favorites/add", async (e, s) => {
        let { songId: n, song: i } = s;
        const o = ho();
        try {
          t.dispatch("favorites/add:processing", {
            songId: n,
            song: i,
            actionId: o,
          }),
            await (async function (t) {
              const e = `/api/favorites/${t}`;
              ir(await fetch(e, { method: "put", credentials: "include" }));
            })(n),
            t.dispatch("favorites/add:done", {
              songId: n,
              song: i,
              actionId: o,
            });
        } catch (e) {
          console.error(e),
            t.dispatch("favorites/add:error", {
              songId: n,
              song: i,
              actionId: o,
            });
        }
      }),
      t.on("favorites/add:processing", (t, e) => {
        let { song: s, actionId: n } = e;
        return {
          favorites: Object.assign({}, t.favorites, {
            favorites: ja(t.favorites.favorites, s),
            actionId: n,
            loading: !0,
          }),
        };
      }),
      t.on("favorites/add:done", (t, e) => {
        let { actionId: s } = e;
        return t.favorites.actionId === s
          ? {
              favorites: Object.assign({}, t.favorites, {
                actionId: "",
                loading: !1,
              }),
            }
          : null;
      }),
      t.on("favorites/add:error", (t, e) => {
        let { songId: s, actionId: n } = e;
        return t.favorites.actionId === n
          ? {
              favorites: Object.assign({}, t.favorites, {
                favorites: Ra(t.favorites.favorites, s),
                actionId: "",
                loading: !1,
              }),
            }
          : null;
      }),
      t.on("favorites/delete", async (e, s) => {
        const n = ho(),
          i = e.favorites.favorites.find((t) => t.songId === s);
        if (i)
          try {
            t.dispatch("favorites/delete:processing", {
              songId: s,
              song: i,
              actionId: n,
            }),
              await (async function (t) {
                const e = `/api/favorites/${t}`;
                ir(
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
      t.on("favorites/delete:processing", (t, e) => {
        let { songId: s, actionId: n } = e;
        return {
          favorites: Object.assign({}, t.favorites, {
            favorites: Ra(t.favorites.favorites, s),
            actionId: n,
            loading: !0,
          }),
        };
      }),
      t.on("favorites/delete:done", (t, e) => {
        let { actionId: s } = e;
        return t.favorites.actionId === s
          ? {
              favorites: Object.assign({}, t.favorites, {
                actionId: "",
                loading: !1,
              }),
            }
          : null;
      }),
      t.on("favorites/delete:error", (t, e) => {
        let { song: s, actionId: n } = e;
        return t.favorites.actionId === n
          ? {
              favorites: Object.assign({}, t.favorites, {
                favorites: ja(t.favorites.favorites, s),
                actionId: "",
                loading: !1,
              }),
            }
          : null;
      }),
      t.on("favorites/load:processing", (t) => ({
        favorites: Object.assign({}, t.favorites, { loading: !0, error: !1 }),
      })),
      t.on("favorites/load:done", (t, e) => ({
        favorites: Object.assign({}, t.favorites, {
          favorites: e,
          actionId: "",
          loading: !1,
          error: !1,
        }),
      })),
      t.on("favorites/load:error", (t) => ({
        favorites: Object.assign({}, t.favorites, {
          favorites: [],
          loading: !1,
          error: !0,
        }),
      })),
      t.on("favorites/filter", (t, e) => ({
        favorites: Object.assign({}, t.favorites, { pattern: e }),
      })),
      t.on("user/signOut", (t) => ({
        favorites: Object.assign({}, t.favorites, {
          favorites: [],
          pattern: "",
          actionId: "",
        }),
      })),
      t.on("favorites/filter/difficulty", (t, e) => ({
        favorites: Object.assign({}, t.favorites, {
          filters: ra(t.favorites.filters, e),
        }),
      })),
      t.on("favorites/filter/instrument", (t, e) => ({
        favorites: Object.assign({}, t.favorites, {
          filters: aa(t.favorites.filters, e),
        }),
      })),
      t.on("favorites/filter/tuning", (t, e) => {
        let { instrument: s, tuning: n } = e;
        return {
          favorites: Object.assign({}, t.favorites, {
            filters: ca(t.favorites.filters, s, n),
          }),
        };
      }),
      t.on("favorites/filter/reset", (t) => ({
        favorites: Object.assign({}, t.favorites, { filters: Kr }),
      }));
  },
  Ma = (t, e) => {
    const s = t.findIndex((t) => t.id === e);
    return t.slice(0, s).concat(t.slice(s + 1));
  };
async function Da(t) {
  try {
    t("setlists/load:processing"),
      t(
        "setlists/load:done",
        await (async function (t) {
          const e = await fetch("/api/setlists", { credentials: "include" });
          return (
            ir(e),
            (await e.json()).map((t) => ({
              name: t.name,
              id: t.id,
              songs: ba(ya(t.songs)),
            }))
          );
        })()
      );
  } catch (e) {
    console.error(e), t("setlists/load:error", e);
  }
}
async function Ba(t, e) {
  try {
    t("setlists/create:processing", { name: e });
    const s = await (async function (t) {
      const e = { name: t },
        s = await nr("/api/setlist", e);
      return ir(s), s.json();
    })(e);
    t("setlists/create:done", s.id);
  } catch (e) {
    console.error(e), t("setlists/create:error");
  }
}
const Fa = (t) => {
    t.on("user/signIn", async () => Da(t.dispatch)),
      t.on("user/googleSignIn", async () => Da(t.dispatch)),
      t.on("user/signOut", (t) => ({
        setlists: Object.assign({}, t.setlists, {
          setlists: [],
          activeSetId: void 0,
        }),
      })),
      t.on("setlists/load:processing", (t) => ({
        setlists: Object.assign({}, t.setlists, { loading: !0 }),
      })),
      t.on("setlists/load:done", (t, e) => ({
        setlists: Object.assign({}, t.setlists, { setlists: e, loading: !1 }),
      })),
      t.on("setlists/load:error", (t) => ({
        setlists: Object.assign({}, t.setlists, { setlists: [], loading: !1 }),
      })),
      t.on("setlists/select", (t, e) => ({
        setlists: Object.assign({}, t.setlists, {
          activeSetId: e,
          removeSetId: void 0,
        }),
      })),
      t.on("setlists/openCreate", async (e) => {
        const { createSetForm: s, loading: n } = e.setlists;
        !n && s && "" !== s.name.trim() && (await Ba(t.dispatch, s.name)),
          t.dispatch("setlists/openCreate:init");
      }),
      t.on("setlists/openCreate:init", (t) => ({
        setlists: Object.assign({}, t.setlists, {
          createSetForm: { name: "" },
        }),
      })),
      t.on("setlists/cancelEdit", (t) => ({
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
      t.on("setlists/confirmCreate", (e) => {
        const { createSetForm: s, loading: n } = e.setlists;
        return (
          !n &&
            s &&
            ("" !== s.name.trim()
              ? Ba(t.dispatch, s.name)
              : t.dispatch("setlists/cancelCreate")),
          null
        );
      }),
      t.on("setlists/cancelCreate", (t) => ({
        setlists: Object.assign({}, t.setlists, { createSetForm: void 0 }),
      })),
      t.on("setlists/create:processing", (t, e) => {
        let { name: s } = e;
        return t.setlists.createSetForm
          ? {
              setlists: Object.assign({}, t.setlists, {
                loading: !0,
                setlists: [
                  { id: "new", name: s, songs: [] },
                  ...t.setlists.setlists,
                ],
                createSetForm: void 0,
              }),
            }
          : null;
      }),
      t.on("setlists/create:done", (t, e) => {
        const s = [...t.setlists.setlists],
          n = s.find((t) => "new" === t.id);
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
      t.on("setlists/create:error", (t) => ({
        setlists: Object.assign({}, t.setlists, {
          setlists: Ma(t.setlists.setlists, "new"),
          loading: !1,
        }),
      })),
      t.on("setlists/initRemove", (t, e) => {
        const { setlists: s } = t.setlists,
          n = s.find((t) => t.id === e);
        return n
          ? { setlists: Object.assign({}, t.setlists, { removeSetId: e }) }
          : null;
      }),
      t.on("setlists/confirmRemove", (e, s) => {
        const { removeSetId: n, loading: i, setlists: o } = e.setlists;
        if (!i && n === s) {
          const e = o.find((t) => t.id === s);
          e &&
            (async function (t, e, s) {
              try {
                t("setlists/remove:processing", { id: e, name: s }),
                  await (async function (t) {
                    const e = `/api/setlist/${t}`,
                      s = await fetch(e, {
                        method: "delete",
                        credentials: "include",
                      });
                    return ir(s), s.json();
                  })(e),
                  t("setlists/remove:done");
              } catch (e) {
                console.error(e), Da(t);
              }
            })(t.dispatch, s, e.name);
        }
        return null;
      }),
      t.on("setlists/remove:processing", (t, e) => {
        let { id: s } = e;
        return {
          setlists: Object.assign({}, t.setlists, {
            setlists: Ma(t.setlists.setlists, s),
            activeSetId: void 0,
            loading: !0,
          }),
        };
      }),
      t.on("setlists/remove:done", (t) => ({
        setlists: Object.assign({}, t.setlists, { loading: !1 }),
      })),
      t.on("setlists/removeSong", async (e, s) => {
        let { songId: n, setlistId: i } = s;
        const { setlists: o, loading: r } = e.setlists,
          a = o.find((t) => t.id === i);
        if (!r && a && a.songs) {
          const s = a.songs.find((t) => t.songId === n);
          if (s)
            try {
              t.dispatch("setlists/removeSong:processing", {
                song: s,
                songId: n,
                setlist: a,
                setlistId: i,
              }),
                await (async function (t, e) {
                  const s = `/api/setlist/song/${t}`,
                    n = await nr(
                      s,
                      { songId: e },
                      {},
                      { method: "delete", credentials: "include" }
                    );
                  return ir(n), n.json();
                })(i, n),
                t.dispatch("setlists/removeSong:done");
            } catch (e) {
              console.error(e), Da(t.dispatch);
            }
        }
      }),
      t.on("setlists/removeSong:processing", (t, e) => {
        let { songId: s, setlistId: n } = e;
        const { setlists: i } = t.setlists,
          o = i.find((t) => t.id === n);
        return o
          ? ((o.songs = ((t, e) => {
              const s = t.findIndex((t) => t.songId === e);
              return t.slice(0, s).concat(t.slice(s + 1));
            })(o.songs, s)),
            {
              setlists: Object.assign({}, t.setlists, {
                setlists: [...i],
                loading: !0,
              }),
            })
          : null;
      }),
      t.on("setlists/removeSong:done", (t) => ({
        setlists: Object.assign({}, t.setlists, { loading: !1 }),
      })),
      t.on("setlists/addSong", async (e, s) => {
        let { song: n, setlistId: i } = s;
        const { setlists: o, loading: r } = e.setlists,
          a = o.find((t) => t.id === i);
        if (!r && a && !a.songs.find((t) => t.songId === n.songId))
          try {
            t.dispatch("setlists/addSong:processing", {
              song: n,
              setlistId: i,
              setlist: a,
            }),
              await (async function (t, e) {
                const s = `/api/setlist/song/${t}`,
                  n = { songId: e },
                  i = await nr(s, n);
                return ir(i), i.json();
              })(i, n.songId),
              t.dispatch("setlists/addSong:done");
          } catch (e) {
            console.error(e), Da(t.dispatch);
          }
      }),
      t.on("setlists/addSong:processing", (e, s) => {
        let { song: n, setlistId: i } = s;
        const { setlists: o, markedIds: r } = e.setlists,
          a = [...o],
          c = a.find((t) => t.id === i);
        if (c) {
          c.songs = [n, ...c.songs];
          const s = [...r];
          return (
            r.includes(i) ||
              (s.push(i),
              setTimeout(() => {
                t.dispatch("setlists/flushMark", i);
              }, 1500)),
            {
              setlists: Object.assign({}, e.setlists, {
                setlists: a,
                markedIds: s,
                loading: !0,
              }),
            }
          );
        }
        return null;
      }),
      t.on("setlists/addSong:done", (t) => ({
        setlists: Object.assign({}, t.setlists, { loading: !1 }),
      })),
      t.on("setlists/flushMark", (t, e) => {
        const { markedIds: s } = t.setlists;
        if (s.includes(e)) {
          const n = s.findIndex((t) => t === e);
          return {
            setlists: Object.assign({}, t.setlists, {
              markedIds: s.slice(0, n).concat(s.slice(n + 1)),
            }),
          };
        }
        return null;
      }),
      t.on("setlists/panelClick", (e) => {
        const { createSetForm: s } = e.setlists;
        return s && t.dispatch("setlists/confirmCreate"), null;
      });
  },
  $a = (t) => (t.layer.layer ? { layer: { layer: null } } : null),
  Ua = (t) => {
    t.on("layer/show", (t, e) => ({ layer: { layer: e } })),
      t.on("route/change", $a),
      t.on("layer/hide", $a),
      t.on("screen/toggleFullscreen", $a);
  };
async function za(t, e, s) {
  try {
    t("revisions/load:processing", { songId: e });
    const n = await (async function (t, e) {
      const s = `/api/meta/${t}/revisions`;
      return await Ks(() => s, "revisions", e);
    })(e, s);
    t("revisions/load:done", { songId: e, revisions: n });
  } catch (n) {
    if (s.aborted) return;
    t("revisions/load:error", { songId: e, error: n });
  }
}
const Ga = (t) => {
    t.on("meta/load:processing", (t, e) => {
      let { songId: s } = e;
      if (t.revisions.songId && s !== t.revisions.songId)
        return {
          revisions: {
            revisions: null,
            isLoading: !0,
            isError: !1,
            songId: void 0,
          },
        };
    }),
      t.on("revisions/load:processing", (t, e) => {
        let { songId: s } = e;
        if (t.meta.songId === s)
          return {
            revisions: Object.assign({}, t.revisions, {
              songId: s,
              revisions: null,
              isLoading: !0,
              isError: !1,
            }),
          };
      }),
      t.on("revisions/load:done", (t, e) => {
        let { revisions: s, songId: n } = e;
        if (t.meta.songId === n)
          return {
            revisions: Object.assign({}, t.revisions, {
              revisions: s,
              isLoading: !1,
              isError: !1,
            }),
          };
      }),
      t.on("revisions/load:error", (t, e) => {
        let { error: s, songId: n } = e;
        if (t.meta.songId === n)
          return {
            revisions: Object.assign({}, t.revisions, {
              revisions: null,
              isLoading: !1,
              isError: !0,
            }),
          };
      });
  },
  Ha = (t) => {
    async function e(e, s) {
      if (s && !e.songs.songs.hasMore) return;
      const n = e.songs.pattern,
        i = e.songs.filters;
      let o = 0,
        r = null;
      s &&
        e.songs.songs.pattern === e.songs.pattern &&
        ma(e.songs.songs.filters, e.songs.filters) &&
        ((r = e.songs.songs.list), (o = r.length));
      const a = new nn();
      try {
        t.dispatch("songs/load:processing", { pattern: n, filters: i, ac: a });
        let s = await (function (t, e, s) {
          return wa(
            "/api/songs",
            t,
            e,
            s,
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 200,
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
          );
        })(n, pa(i), a.signal, 50, o);
        if (a.signal.aborted) return;
        const c = e.songs.defaultInstrument;
        da(i) || (s = fa(s, c));
        const l = (r ? r.length : 0) + s.length,
          d = 50 === s.length && l < 500;
        t.dispatch("songs/load:done", {
          songs: r ? [...r, ...s] : s,
          hasMore: d,
          defaultInstrument: c,
          pattern: n,
          filters: i,
        }),
          r ||
            requestAnimationFrame(() => {
              Sa("panel-search", "top");
            });
      } catch (e) {
        if (a.signal.aborted) return;
        console.error(e),
          t.dispatch("songs/load:error", { error: e, pattern: n, filters: i });
      }
    }
    const s = (t) => e(t, !1);
    t.on("songs/load:processing", (t, e) => {
      let { pattern: s, filters: n, ac: i } = e;
      return (
        t.songs.loading && t.songs.loading.ac.abort(),
        {
          songs: Object.assign({}, t.songs, {
            loading: { filters: n, pattern: s, ac: i },
          }),
        }
      );
    }),
      t.on("songs/load:done", (t, e) => {
        let {
          songs: s,
          hasMore: n,
          pattern: i,
          filters: o,
          defaultInstrument: r,
        } = e;
        const a = t.songs.loading;
        if (a && ma(a.filters, o) && a.pattern === i)
          return {
            songs: Object.assign({}, t.songs, {
              songs: {
                list: s,
                defaultInstrument: r,
                hasMore: n,
                pattern: i,
                filters: o,
              },
              loading: null,
            }),
          };
      }),
      t.on("songs/load:error", (t, e) => {
        let { error: s, pattern: n, filters: i } = e;
        const o = t.songs.loading;
        if (o && ma(o.filters, i) && o.pattern === n)
          return { songs: Object.assign({}, t.songs, { loading: null }) };
      }),
      t.on("songs/filter", (t, e) => {
        let { pattern: s, filters: n } = e;
        return {
          songs: Object.assign({}, t.songs, { pattern: s, filters: n }),
        };
      }),
      t.on("songs/filter", s),
      t.on("songs/default", (t, e) => {
        let { instrumentId: s } = e;
        const n = ga(s);
        let i = t.songs.songs.list;
        return (
          da(t.songs.songs.filters) ||
            t.songs.songs.defaultInstrument === n ||
            (i = fa(t.songs.songs.list, n)),
          {
            songs: Object.assign({}, t.songs, {
              songs: Object.assign({}, t.songs.songs, {
                list: i,
                defaultInstrument: n,
              }),
              defaultInstrument: n,
            }),
          }
        );
      }),
      t.on("songs/more", (t) => e(t, !0)),
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
      t.on("songs/filter/tuning", (t, e) => {
        let { instrument: s, tuning: n } = e;
        return {
          songs: Object.assign({}, t.songs, {
            filters: ca(t.songs.filters, s, n),
          }),
        };
      }),
      t.on("songs/filter/tuning", s),
      t.on("songs/filter/reset", (t) => ({
        songs: Object.assign({}, t.songs, { filters: Kr }),
      })),
      t.on("songs/filter/reset", s),
      t.on("route/change", (e, s) => {
        let { route: n, query: i } = s;
        if ("search" === (null == n ? void 0 : n.page)) {
          const s = (null == i ? void 0 : i.pattern) || "",
            n = {
              instrument: null != i && i.inst ? et(i.inst) : "ALL INSTRUMENTS",
              tunings: e.songs.filters.tunings,
              difficulty: e.songs.filters.difficulty,
            };
          (e.songs.songs.list.length &&
            e.songs.songs.pattern === s &&
            ma(e.songs.songs.filters, n)) ||
            t.dispatch("songs/filter", { pattern: s, filters: n });
        }
      });
  },
  Wa = {
    song: null,
    songSubmitted: !1,
    songError: null,
    revision: null,
    revisionSubmitted: !1,
    revisionError: null,
  };
async function qa(t, e, s) {
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
      if (e && e.aborted) return { songSubmitted: !1, song: null };
      await dr(n), await ur(n);
      const i = {
        songId: (o = await n.json()).id,
        artistId: o.artist.id,
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
      const e = await dn(n.song.songId);
      e && t("navigate", Me(e, 0));
    }
  } catch (e) {
    throw (t("upload/song:error", { error: e }), e);
  }
}
async function Va(t, e, s) {
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
      await dr(n), await ur(n);
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
    if ((t("upload/revision:uploaded", n), n.revisionSubmitted)) {
      const e = await dn(n.revision.songId, n.revision.revisionId);
      e && t("navigate", Me(e, 0, e.revisionId));
    }
  } catch (e) {
    throw (t("upload/revision:error", { error: e }), e);
  }
}
const Xa = (t) => {
    t.on("upload/song:uploaded", (t, e) => {
      let { songSubmitted: s, song: n } = e;
      return {
        uploads: Object.assign({}, t.uploads, {
          songError: null,
          songSubmitted: s,
          song: n,
        }),
      };
    }),
      t.on("upload/reset", () => ({ uploads: Wa })),
      t.on("upload/song:error", (t, e) => {
        let { error: s } = e;
        return { uploads: Object.assign({}, t.uploads, { songError: s }) };
      }),
      t.on("upload/revision:uploaded", (t, e) => {
        let { revisionSubmitted: s, revision: n } = e;
        return {
          uploads: Object.assign({}, t.uploads, {
            revisionError: null,
            revisionSubmitted: s,
            revision: n,
          }),
        };
      }),
      t.on("upload/revision:error", (t, e) => {
        let { error: s } = e;
        return { uploads: Object.assign({}, t.uploads, { revisionError: s }) };
      });
  },
  Ya = (t) => {
    t.on("demo/activate", (t) => ({
      demo: { active: !0, enabled: 27 === t.meta.songId },
    })),
      t.on("meta/load:processing", (t, e) => {
        let { songId: s } = e;
        return t.demo.active
          ? 27 === s
            ? { demo: { active: !0, enabled: !0 } }
            : { demo: { active: !1, enabled: !1 } }
          : null;
      });
  };
var Ja;
!(function (t) {
  (t.PROMO_CONTEXT_SLOWDOWN = "promo-context-slowdown"),
    (t.PROMO_CONTEXT_LOOP = "promo-context-loop"),
    (t.PROMO_CONTEXT_NO_ADS = "promo-context-no-ads"),
    (t.PROMO_CONTEXT_PRINT = "promo-context-print"),
    (t.PROMO_CONTEXT_MUTE = "promo-context-mute"),
    (t.PROMO_CONTEXT_SOLO = "promo-context-solo"),
    (t.PROMO_CONTEXT_RETUNE = "promo-context-retune"),
    (t.SCREENER = "screener"),
    (t.UT_RECORDER = "ut-recorder");
})(Ja || (Ja = {}));
const Ka = [Ja.UT_RECORDER],
  Qa = {
    allowNewUsers: !0,
    ignoreSingleAppearance: !1,
    ignoreDailyTimespan: !1,
    forced: !1,
  };
function Za(t) {
  const e = new Date(Date.now() - 864e5);
  return new Date(t) >= e;
}
function tc(t) {
  let e =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : new Date().toUTCString();
  if (window.__ACTIVE_ATTRACTOR__ !== t) return;
  const s = hr("hasSeenAttractors") || {};
  (s[t] = e), pr("hasSeenAttractors", s), (window.__ACTIVE_ATTRACTOR__ = null);
}
function ec() {
  return hr("hasSeenAttractors") || {};
}
function sc(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qa;
  (e = Object.assign({}, Qa, e)), console.log("attractor:", t, e);
  const s = -1 !== window.location.search.indexOf("ut=on");
  if (s && Ka.includes(t)) return (window.__ACTIVE_ATTRACTOR__ = t), !0;
  if (t === window.__ACTIVE_ATTRACTOR__) return !0;
  if (e.forced) return !0;
  if (window.__ACTIVE_ATTRACTOR__ && t !== window.__ACTIVE_ATTRACTOR__)
    return !1;
  let n = !0;
  if (!e.allowNewUsers && !window.__HAS_BEEN_SEEN_BEFORE__) return !1;
  const i = hr("hasSeenAttractors") || {};
  return (
    e.ignoreDailyTimespan ||
      Object.keys(i).forEach((t) => {
        Za(i[t]) && (n = !1);
      }),
    !e.ignoreSingleAppearance && i[t] && (n = !1),
    n && (window.__ACTIVE_ATTRACTOR__ = t),
    n
  );
}
const nc = (t) =>
  !!hr("hasUnsubscribedFromPromo") || !!true || !!t.promo.active;
function ic(t) {
  const { position: e } = t.player,
    s = t.part.current,
    n = [
      ...t.promo.playbackPositionEvents.filter(
        (t) => t.time > Date.now() - 12e4
      ),
    ];
  let i = 0;
  if (s) {
    const t = Fi(s, e.cursor, "left"),
      o = `${s.revisionId}:${s.partId}:${t.measureLayout.measure.index}`;
    n.push({ time: Date.now(), key: o }),
      (i = n.filter((t) => t.key === o).length);
  }
  return { events: n, relatedEvents: i };
}
function oc(t, e) {
  if (nc(t)) return;
  if (!t.player.shouldPlay || !t.player.canPlay) return;
  let s = t.promo.active;
  const { events: n, relatedEvents: i } = ic(t);
  return (
    i >= 3 &&
      sc(Ja.PROMO_CONTEXT_SLOWDOWN) &&
      ((s = "slowdown"), t.device.isPhone && e("player/stopPlay")),
    {
      promo: Object.assign({}, t.promo, {
        playbackPositionEvents: n,
        active: s,
      }),
    }
  );
}
function rc(t, e) {
  if (nc(t)) return;
  if (!t.player.shouldPlay || !t.player.canPlay) return;
  if (!ec()[Ja.PROMO_CONTEXT_SLOWDOWN]) return;
  let s = t.promo.active;
  const { events: n, relatedEvents: i } = ic(t);
  return (
    i >= 3 &&
      sc(Ja.PROMO_CONTEXT_LOOP) &&
      ((s = "loop"), t.device.isPhone && e("player/stopPlay")),
    {
      promo: Object.assign({}, t.promo, {
        playbackPositionEvents: n,
        active: s,
      }),
    }
  );
}
function ac(t, e) {
  if (nc(t) || !t.player.shouldPlay || !t.player.canPlay) return;
  let s = t.promo.active;
  const { events: n, bassEvents: i } = (function (t) {
    const e = t.part.current;
    let s = "other";
    e &&
      (ve(e.instrumentId) && (s = "guitar"),
      be(e.instrumentId) && (s = "bass"),
      ye(e.instrumentId) && (s = "drums"));
    const n = [...t.promo.playbackTypeEvents, { time: Date.now(), type: s }],
      i = n.filter((t) => "bass" === t.type).length;
    return { events: n, bassEvents: i };
  })(t);
  return (
    5 === i &&
      sc(Ja.PROMO_CONTEXT_SOLO) &&
      ((s = "solo"), t.device.isPhone && e("player/stopPlay")),
    { promo: Object.assign({}, t.promo, { playbackTypeEvents: n, active: s }) }
  );
}
const cc = (t) => {
    if (!hr("hasUnsubscribedFromPromo")) {
      const e = ec();
      if (
        (e[Ja.PROMO_CONTEXT_SLOWDOWN] ||
          (t.on("player/moveCursor", (e) => oc(e, t.dispatch)),
          t.on("player/togglePlay", (e) => oc(e, t.dispatch))),
        e[Ja.PROMO_CONTEXT_LOOP] ||
          (t.on("player/moveCursor", (e) => rc(e, t.dispatch)),
          t.on("player/togglePlay", (e) => rc(e, t.dispatch))),
        e[Ja.PROMO_CONTEXT_NO_ADS] ||
          t.on("curiosity/vpt10", (e) =>
            (function (t, e) {
              if (nc(t)) return;
              let s = t.promo.active;
              const { isPhone: n } = t.device,
                { canPlay: i, shouldPlay: o } = t.player;
              return (
                t.screen.viewport.height < (n ? 740 : 900) &&
                  sc(Ja.PROMO_CONTEXT_NO_ADS) &&
                  ((s = "noads"), n && i && o && e("player/stopPlay")),
                { promo: Object.assign({}, t.promo, { active: s }) }
              );
            })(e, t.dispatch)
          ),
        !e[Ja.PROMO_CONTEXT_PRINT])
      ) {
        let e;
        t.on("meta/load:done", (s) => {
          "tab" !== s.route.page ||
            s.device.isPhone ||
            (clearTimeout(e),
            (e = setTimeout(() => t.dispatch("promo/print:fire"), 2e4)));
        }),
          t.on("route/change", () => clearTimeout(e)),
          t.on("promo/print:fire", (t) =>
            (function (t) {
              if (nc(t)) return;
              let e = t.promo.active;
              return (
                sc(Ja.PROMO_CONTEXT_PRINT) && (e = "print"),
                { promo: Object.assign({}, t.promo, { active: e }) }
              );
            })(t)
          );
      }
      if (!e[Ja.PROMO_CONTEXT_MUTE]) {
        let e;
        t.on("player/togglePlay", (e) =>
          (function (e) {
            if (!nc(e))
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
          t.on("promo/mute:start", (s, n) => {
            let { delay: i } = n;
            clearTimeout(e),
              (e = setTimeout(() => t.dispatch("promo/mute:fire"), i));
          }),
          t.on("route/change", () => clearTimeout(e)),
          t.on("promo/mute:clear", () => clearTimeout(e)),
          t.on("promo/mute:fire", (t) =>
            (function (t) {
              if (nc(t)) return;
              let e = t.promo.active;
              const s = t.promo.halfPlayed + 1;
              return (
                s >= 2 && sc(Ja.PROMO_CONTEXT_MUTE) && (e = "mute"),
                {
                  promo: Object.assign({}, t.promo, {
                    halfPlayed: s,
                    active: e,
                  }),
                }
              );
            })(t)
          );
      }
      if (
        (e[Ja.PROMO_CONTEXT_SOLO] ||
          (t.on("player/moveCursor", (e) => ac(e, t.dispatch)),
          t.on("player/togglePlay", (e) => ac(e, t.dispatch))),
        !e[Ja.PROMO_CONTEXT_RETUNE])
      ) {
        let e;
        t.on("meta/load:done", (s) => {
          "tab" === s.route.page &&
            (clearTimeout(e),
            (e = setTimeout(() => t.dispatch("promo/retune:fire"), 1e4)));
        }),
          t.on("route/change", () => clearTimeout(e)),
          t.on("promo/retune:fire", (t) =>
            (function (t) {
              if (nc(t)) return;
              let e = t.promo.active;
              const s = t.part.current;
              if (s) {
                const t = s.tuning && qr(s.instrumentId, s.tuning);
                t &&
                  0 !== t.pitch &&
                  sc(Ja.PROMO_CONTEXT_RETUNE) &&
                  (e = "retune");
              }
              return { promo: Object.assign({}, t.promo, { active: e }) };
            })(t)
          );
      }
      t.on("promo/dismiss", (t) => {
        switch (t.promo.active) {
          case "slowdown":
            tc(Ja.PROMO_CONTEXT_SLOWDOWN);
            break;
          case "loop":
            tc(Ja.PROMO_CONTEXT_LOOP);
            break;
          case "noads":
            tc(Ja.PROMO_CONTEXT_NO_ADS);
            break;
          case "print":
            tc(Ja.PROMO_CONTEXT_PRINT);
            break;
          case "mute":
            tc(Ja.PROMO_CONTEXT_MUTE);
            break;
          case "solo":
            tc(Ja.PROMO_CONTEXT_SOLO);
            break;
          case "retune":
            tc(Ja.PROMO_CONTEXT_RETUNE);
        }
        return { promo: Object.assign({}, t.promo, { active: !1 }) };
      }),
        t.on(
          "promo/unsubscribe",
          (t) => (
            pr("hasUnsubscribedFromPromo", new Date().toUTCString()),
            { promo: Object.assign({}, t.promo, { active: !1 }) }
          )
        );
    }
  },
  lc = () => ({
    isDeleted: !1,
    editor: { canDelete: !1, processingDeletion: !1 },
  }),
  dc = (t) => {
    const { user: e } = t;
    let s = !1;
    if (e.isLoggedIn && t.meta.current) {
      const { editors: n } = t.meta.current;
      s = e.isAdmin || (n && 1 === n.length && n[0] === e.profile.id);
    }
    return {
      isDeleted: !1,
      editor: Object.assign({}, t.editor, { canDelete: s }),
    };
  },
  uc = (t) => {
    t.on("meta/load:done", dc),
      t.on("user/init", dc),
      t.on("user/signIn", dc),
      t.on("user/googleSignIn", dc),
      t.on("user/signUp", dc),
      t.on("user/signOut", lc),
      t.on(
        "editor/delete",
        (e, s) => (
          (async function (t, e) {
            try {
              const s = new nn(),
                n = await (async function (t, e) {
                  const s = `/api/song/${t.songId}`,
                    n = await fetch(s, {
                      method: "delete",
                      credentials: "include",
                      signal: e,
                    });
                  return e && e.aborted
                    ? { success: !1 }
                    : (ir(n),
                      await lr(n),
                      rr(n, "Forbidden"),
                      { success: !!n.ok });
                })(e, s.signal);
              n.success
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
            editor: Object.assign({}, e.editor, { processingDeletion: !0 }),
          }
        )
      ),
      t.on("editor/delete:done", (t) => ({
        isDeleted: !0,
        editor: Object.assign({}, t.editor, { processingDeletion: !1 }),
      })),
      t.on("editor/delete:error", (t, e) => {
        const s = e.message;
        return (
          window && window.alert(`Error: ${s}`),
          {
            isDeleted: !0 === t.isDeleted,
            editor: Object.assign({}, t.editor, { processingDeletion: !1 }),
          }
        );
      }),
      t.on("editor/sound:toggle", (e, s) => {
        let { version: n } = s;
        e.meta.current &&
          yr(t, e.meta.songId, e.meta.partId, e.meta.current.revisionId, n);
      }),
      t.on("editor/sound:generate", (t, e) => {
        let { version: s } = e;
        t.meta.current &&
          (async function (t, e) {
            try {
              const s = new nn();
              await (async function (t, e, s) {
                const n = await nr("/api/sound/generate", {
                  revisionId: t,
                  version: e,
                });
                (s && s.aborted) || ir(n);
              })(t, e, s.signal),
                alert("Done!");
            } catch (t) {
              console.error(t), alert(`Error: ${t.message}`);
            }
          })(t.meta.current.revisionId, s);
      });
  };
function hc(t, e, s) {
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
                  (s.upStroke || s.downStroke) && (e.upDownStroke = !0),
                  s.palmMute && (e.palmMute = !0),
                  s.chord && (e.chord = !0),
                  s.wideVibrato && (e.wideVibrato = !0),
                  s.tapping && (e.tapping = !0);
                for (const t of s.notes)
                  t.hp && ((e.hammerOn = !0), (e.pullOff = !0)),
                    t.tie && (e.tie = !0),
                    t.bend &&
                      (t.bend.points[0].tone > t.bend.points[1].tone &&
                        (e.releaseBend = !0),
                      (e.bend = !0)),
                    t.ghost && (e.ghostNote = !0),
                    t.dead && (e.deadNote = !0),
                    t.vibrato && (e.vibrato = !0),
                    t.rightSlide &&
                      ("legato" !== t.rightSlide
                        ? (e.legatoSlide = !0)
                        : (e.slide = !0)),
                    "natural" === t.harmonic && (e.naturalHarmonic = !0),
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
}
const pc = (t) => {
    t.on("tabFeatures/set", (t, e) => {
      let { features: s } = e;
      return { tabFeatures: s };
    }),
      t.on("meta/load:processing", () => ({ tabFeatures: void 0 }));
  },
  gc = [
    "touchstart",
    "click",
    "scroll",
    "mousewheel",
    "mousemove",
    "mousedown",
  ],
  fc = (t) => t && t.replace(/["'=!+#*~;^()<>[\],&]/gi, "");
function mc(t, e) {
  const {
      dispatch: s,
      ads: n,
      meta: i,
      chords: r,
      route: a,
      routeContent: c,
    } = k("ads", "meta", "chords", "route", "routeContent"),
    l = window.__HAS_BEEN_SEEN_BEFORE__ || Po.hasFirstActivity,
    [d, u] = o(l);
  p(() => {
    if (!d) {
      const t = () => {
        u(!0), gc.forEach((e) => window.removeEventListener(e, t));
      };
      return (
        gc.forEach((e) => window.addEventListener(e, t)),
        () => gc.forEach((e) => window.removeEventListener(e, t))
      );
    }
  }, [d]),
    p(() => {
      if (!d || n.notsyFailed) return;
      if (!n.notsyLoaded) return void s("notsy/load");
      if ("tab" === a.page) {
        const { songId: t } = a;
        if (i.loading || +t !== i.songId) return;
      }
      if ("chords" === a.page) {
        const { songId: t } = a;
        if (r.loading || +t !== r.songId) return;
      }
      const o = {
        route: a,
        block: t,
        options: e,
        personalization: !0,
        songId: 0,
        artist: "",
        song: "",
      };
      "tab" === c.page &&
        ((o.artist = fc(i.current && i.current.artist)),
        (o.song = fc(i.current && i.current.title)),
        (o.songId = i.songId)),
        "chords" === c.page &&
          ((o.artist = fc(r.current && r.current.artist)),
          (o.song = fc(r.current && r.current.title)),
          (o.songId = r.songId)),
        s("notsy/fire", o);
    }, [n, t, d, i, r, e, a, c]);
}
const yc = (t) => {
  t.on("notsy/load", () =>
    (async function (t) {
      try {
        await (async function () {
          return "dev" === window.__STAGE__
            ? null
            : Promise.all([
                L(
                  "https://www.googletagservices.com/tag/js/gpt.js",
                  "__LOADED_GTP__"
                ),
                L(
                  "https://cdn-b.notsy.io/sng/" +
                    ("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"),
                  "__LOADED_NOTSY__"
                ),
              ]);
        })(),
          t("notsy/load:done", { loaded: window.__LOADED_NOTSY__ });
      } catch (e) {
        t("notsy/load:error");
      }
    })(t.dispatch)
  ),
    t.on("notsy/load:done", (t, e) => {
      let { loaded: s } = e;
      return {
        ads: Object.assign({}, t.ads, { notsyLoaded: s, notsyFailed: !s }),
      };
    }),
    t.on("notsy/load:error", (t) => ({
      ads: Object.assign({}, t.ads, { notsyLoaded: !1, notsyFailed: !0 }),
    })),
    t.on("notsy/fire", (t, e) => {
      !(function (t) {
        let {
          route: e,
          block: s,
          options: n,
          personalization: i,
          songId: o,
          artist: r,
          song: a,
          device: c,
        } = t;
        if (!n.isForced && e.page !== n.page) return;
        const l = !i,
          d = [];
        n.isTargeted &&
          (o && d.push(["songID", o]),
          r && d.push(["artist", r]),
          a && d.push(["song", a])),
          window.notsyInit({ page: s, npa: l, targeting: d, gdpr: c.hasGDPR });
      })(Object.assign({}, e, { device: t.device }));
    });
};
function vc(t, e) {
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
const bc = async (t, e) => {
  t.readyState !== t.OPEN &&
    (await ((t) =>
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
};
function wc(t) {
  try {
    t.stop();
  } catch (t) {
    console.error(t);
  }
}
function Sc(t) {
  try {
    t.close();
  } catch (t) {
    console.error(t);
  }
}
class Ec {
  constructor(t) {
    v(this, "onSocketClose", () => {
      console.log("socket closed"),
        ("ready" !== this.state && "active" !== this.state) ||
          ((this.state = "stopped"), this.cleanup(), this.handlers.onClose());
    }),
      v(this, "onError", (t) => {
        ("ready" !== this.state && "active" !== this.state) ||
          ((this.state = "failed"),
          this.cleanup(),
          Sc(this.socket),
          this.handlers.onError(t));
      }),
      v(this, "onTrackEnded", () => {
        ("ready" !== this.state && "active" !== this.state) ||
          ((this.state = "stopped"),
          this.cleanup(),
          Sc(this.socket),
          this.handlers.onTurnedOff());
      }),
      (this.state = "ready"),
      (this.handlers = t),
      (this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec")),
      (this.socket.onclose = this.onSocketClose),
      (this.socket.onerror = this.onError);
  }
  cleanup() {
    this.audioVideoStream && this.audioVideoStream.getTracks().forEach(wc),
      this.voiceStream && this.voiceStream.getTracks().forEach(wc);
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
          ...vc(this.audioVideoStream, this.voiceStream),
        ]);
      for (const t of o.getTracks()) i.addTrack(t, o);
      const r = await i.createOffer({
        OfferToReceiveAudio: !1,
        OfferToReceiveVideo: !1,
      });
      i.setLocalDescription(r),
        (this.socket.onmessage = async (t) => {
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
        await bc(
          this.socket,
          JSON.stringify({
            cmd: "OFFER",
            offer: r.sdp,
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
  async sendEmail(t) {
    await bc(this.socket, JSON.stringify({ cmd: "EMAIL", email: t }));
  }
  stop() {
    ("ready" !== this.state && "active" !== this.state) ||
      ((this.state = "stopped"),
      this.cleanup(),
      Sc(this.socket),
      this.handlers.onStop());
  }
}
async function Ic(t) {
  const e = await fetch(`/actions/usertest/${t}/ticket`, { method: "POST" });
  return ir(e), e.json();
}
async function xc(t) {
  const e = await fetch(`/api/usertest/${t}`);
  return ir(e), e.json();
}
function kc(t) {
  try {
    navigator.sendBeacon("/actions/usertest/ticket/idle", t.token);
  } catch (t) {
    console.log(t);
  }
}
let Tc, Oc;
function Ac() {
  window.removeEventListener("visibilitychange", Tc),
    Oc && (clearTimeout(Oc), (Oc = null));
}
const Pc = { ignoreDailyTimespan: !0, ignoreSingleAppearance: !0 };
async function Lc(t, e) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  try {
    const n = await Ic(e);
    try {
      const i = await xc(e);
      return (
        t("ut/ticket", { ticket: n, script: i }),
        (Oc = setTimeout(() => {
          t("ut/idle");
        }, 6e4 + s)),
        (Tc = () => {
          let e;
          document.hidden
            ? (e = setTimeout(() => {
                kc(n),
                  t("ut/idle"),
                  window.removeEventListener("visibilitychange", Tc);
              }, 3e4))
            : clearTimeout(e);
        }),
        window.addEventListener("visibilitychange", Tc),
        { ticket: n, script: i }
      );
    } catch (e) {
      await Cc(t, n);
    }
  } catch (t) {
    console.error(t);
  }
}
async function Cc(t, e) {
  try {
    await (async function (t) {
      const e = JSON.stringify({ token: t.token }),
        s = await fetch("/actions/usertest/ticket", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: e,
        });
      return ir(s), s.json();
    })(e),
      t("ut/ticket:dismiss");
  } catch (t) {
    console.error(t);
  }
}
function Nc(t) {
  try {
    const { recorder: e, ticket: s, script: n } = t.get().ut;
    e && e.stop(),
      t.dispatch("curiosity/event", {
        event: "UT Recorded",
        name: n.name,
        URL: s.urlToGet,
      });
  } catch (t) {
    console.error(t);
  }
}
function Rc(t, e) {
  jc(t, e);
  let s = e.startUrl || "/";
  (s = s.includes("?") ? `${s}&ut=on` : `${s}?ut=on`),
    (window.location.href = s);
}
function jc(t, e) {
  gr.set("utTicket", t), gr.set("utScript", e);
}
const _c = (t) => {
  t.on("@init", () => ({
    ut: {
      recorderState: "ready",
      recorder: void 0,
      ticket: void 0,
      script: void 0,
      stage: "hidden",
      email: void 0,
      steps: { questions: 0, instructions: 0, survey: 0 },
      isAdditional: !1,
      isClosing: !1,
      isHidden: !1,
    },
  })),
    t.on("ut/close", (t, e) => ({
      ut: Object.assign({}, t.ut, { isClosing: e }),
    })),
    t.on("ut/hide", (t, e) => ({
      ut: Object.assign({}, t.ut, { isHidden: e }),
    })),
    t.on("ut/ticket", (t, e) => {
      let { ticket: s, script: n } = e;
      return { ut: Object.assign({}, t.ut, { ticket: s, script: n }) };
    }),
    t.on("ut/ticket:dismiss", (t) => ({
      ut: Object.assign({}, t.ut, { ticket: void 0 }),
    })),
    t.on("ut/email", (e, s) => {
      var n;
      const { name: i } = e.ut.script;
      return (
        t.dispatch("curiosity/event", {
          event: "UT Email Submitted",
          name: i,
          email: s,
        }),
        null === (n = e.ut.recorder) || void 0 === n || n.sendEmail(s),
        { ut: Object.assign({}, e.ut, { email: s, stage: "instructions" }) }
      );
    }),
    t.on("ut/continue", (e, s) => {
      if (s) return t.dispatch("ut/load", s), void jc();
      const { ticket: n, script: i } = {
        ticket: gr.get("utTicket"),
        script: gr.get("utScript"),
      };
      if (n && i) {
        if (!sc(Ja.UT_RECORDER, Pc)) return;
        return (
          t.dispatch("curiosity/event", {
            event: "UT Recording Requested",
            name: i.name,
          }),
          {
            ut: Object.assign({}, e.ut, {
              ticket: n,
              script: i,
              stage: "start",
            }),
          }
        );
      }
    }),
    t.on("ut/load", async (e, s) => {
      const n = await Lc(t.dispatch, s);
      t.dispatch("curiosity/event", {
        event: "UT Recording Requested",
        name: s,
      }),
        n &&
          (null == n ? void 0 : n.script) &&
          t.dispatch("ut/load:done", "start");
    }),
    t.on("ut/feedbackLoad", async (e, s) => {
      const n = await Lc(t.dispatch, s);
      n && n.script && t.dispatch("ut/load:done", "feeback");
    }),
    t.on("ut/load:done", (t, e) => {
      if (sc(Ja.UT_RECORDER, Pc))
        return { ut: Object.assign({}, t.ut, { stage: e }) };
    }),
    t.on("ut/start", (e) => {
      Ac(),
        (async function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = t.get();
          if ("ready" === s.ut.recorderState || "failed" === s.ut.recorderState)
            try {
              const n = new Ec({
                onReady: () => t.dispatch("ut/start:done"),
                onStop: () => t.dispatch("ut/stop:done"),
                onClose: () => t.dispatch("ut/stop:closed"),
                onTurnedOff: () => t.dispatch("ut/stop:turnedOff"),
                onError: (e) => t.dispatch("ut/error", e),
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
    t.on("ut/start:done", (e) => {
      let { ut: s, user: n } = e;
      jc();
      const { name: i, emailRequest: o } = s.script;
      let r;
      return (
        !o || n.isLoggedIn
          ? ((r = "instructions"),
            t.dispatch("curiosity/event", {
              event: "UT Instructions Shown",
              name: i,
            }))
          : ((r = "email"),
            t.dispatch("curiosity/event", {
              event: "UT Email Requested",
              name: i,
            })),
        {
          ut: Object.assign({}, s, {
            recorderState: "active",
            recorder: s.recorder,
            stage: r,
          }),
        }
      );
    }),
    t.on("ut/start:processing", (t, e) => ({
      ut: Object.assign({}, t.ut, { recorderState: "starting", recorder: e }),
    })),
    t.on("ut/terminate", (e) => {
      let { ut: s } = e;
      switch ((tc(Ja.UT_RECORDER), s.stage)) {
        case "intro":
        case "questions":
          Cc(t.dispatch, s.ticket);
          break;
        case "start":
          Cc(t.dispatch, s.ticket), jc(), t.dispatch("navigate", "/");
          break;
        case "email":
        case "instructions":
        case "restart":
        case "survey":
          Cc(t.dispatch, s.ticket), Nc(t), t.dispatch("navigate", "/");
      }
      return (
        t.dispatch("curiosity/event", {
          event: "UT Session Finished",
          name: null == s ? void 0 : s.script.name,
        }),
        {
          ut: {
            recorderState: "ready",
            recorder: void 0,
            ticket: void 0,
            script: void 0,
            stage: "hidden",
            email: void 0,
            steps: { questions: 0, instructions: 0, survey: 0 },
            isAdditional: !1,
            isClosing: !1,
            isHidden: !1,
          },
        }
      );
    }),
    t.on("ut/idle", (e) => {
      let { ut: s } = e;
      return (
        t.dispatch("screener/dismiss"),
        {
          ut: Object.assign({}, s, {
            recorderState: "ready",
            recorder: void 0,
            script: void 0,
            stage: "hidden",
            email: void 0,
            steps: { questions: 0, instructions: 0, survey: 0 },
            isAdditional: !1,
            isClosing: !1,
            isHidden: !1,
          }),
        }
      );
    }),
    t.on(
      "ut/error",
      (e, s) => (
        t.dispatch("curiosity/event", { event: "UT Error", message: s }),
        {
          ut: Object.assign({}, e.ut, {
            recorderState: "failed",
            recorder: void 0,
          }),
        }
      )
    ),
    t.on("ut/stop:done", (t) => ({
      ut: Object.assign({}, t.ut, { recorderState: "ready", recorder: void 0 }),
    })),
    t.on("ut/stop:closed", (t) => ({
      ut: Object.assign({}, t.ut, { recorderState: "ready", recorder: void 0 }),
    })),
    t.on("ut/stop:turnedOff", (t) => ({
      ut: Object.assign({}, t.ut, {
        recorderState: "ready",
        recorder: void 0,
        stage: "restart",
        isAdditional: !0,
      }),
    })),
    t.on("ut/stage", (e, s) => {
      let { ut: n } = e,
        { stage: i, step: o } = s;
      const { ticket: r, script: a } = n;
      switch (i) {
        case "farewell":
          Nc(t),
            t.dispatch("curiosity/event", {
              event: "UT End Dialog Shown",
              name: null == n ? void 0 : n.script.name,
              domain: window.location.hostname,
            });
          break;
        case "not_chosen":
          Cc(t.dispatch, r);
          break;
        case "questions":
          if (!a.questions || !a.questions.length || o >= a.questions.length)
            return void Rc(r, a);
          t.dispatch("curiosity/event", {
            event: "UT Question Shown",
            name: null == n ? void 0 : n.script.name,
            question: a.questions[o],
          });
      }
      return {
        ut: Object.assign({}, n, {
          stage: i,
          steps:
            void 0 !== o ? Object.assign({}, n.steps, { [i]: o }) : n.steps,
        }),
      };
    }),
    t.on("screener/dismiss", (e) => {
      let { ut: s } = e;
      s.ticket && (Ac(), Cc(t.dispatch, s.ticket));
    }),
    t.on("screener/accept", (t, e) => {
      if (e.usertest) {
        const { script: e, ticket: s } = t.ut;
        if (!e || !s) return;
        if (!sc(Ja.UT_RECORDER, Pc)) return;
        let n = "intro";
        if (e && !e.intro) {
          if (!e.questions || !e.questions.length) return void Rc(s, e);
          n = "questions";
        }
        return (
          Ac(),
          {
            ut: Object.assign({}, t.ut, {
              stage: n,
              steps: { questions: 0, instructions: 0, survey: 0 },
              isAdditional: !1,
            }),
          }
        );
      }
    });
};
function Mc(t) {
  return (t.current && t.current.tracks && t.current.tracks[t.partId]) || null;
}
const Dc = { ignoreSingleAppearance: !0, ignoreDailyTimespan: !1 };
function Bc(t) {
  const e = new Date();
  e.setTime(e.getTime() + 7776e6),
    (document.cookie = `ScrShwn-${
      t.cookie
    }=true;expires=${e.toUTCString()};path=/`);
}
let Fc;
async function $c(t, e) {
  const s = t.get(),
    n = [];
  for (const t of s.screener.candidates) {
    const i = t.filter.bassPage,
      o = Mc(s.meta);
    if (
      "unset" !== i &&
      (!o || ("yes" === i && !o.isBassGuitar) || ("no" === i && o.isBassGuitar))
    )
      continue;
    const r = t.filter.drumsPage;
    ("unset" !== r &&
      (!o || ("yes" === r && !o.isDrums) || ("no" === r && o.isDrums))) ||
      ((!t.filter.showAfterAction ||
        (e.event && t.filter.showAfterAction === e.event)) &&
        n.push(t));
  }
  if (n.length) {
    const s = n[Math.floor(Math.random() * n.length)];
    if (s.usertest) {
      var i;
      const e =
        1e3 *
        ((null === (i = s.filter) || void 0 === i ? void 0 : i.delay) || 0);
      if (!(await Lc(t.dispatch, s.usertest, e))) return;
    }
    if ((clearTimeout(Fc), s.filter.delay))
      return void (Fc = setTimeout(() => {
        sc(Ja.SCREENER, Object.assign({}, Dc, { forced: e.forced })) &&
          t.dispatch("screener/set", s);
      }, 1e3 * s.filter.delay));
    sc(Ja.SCREENER, Object.assign({}, Dc, { forced: e.forced })) &&
      t.dispatch("screener/set", s);
  }
}
function Uc(t, e) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const n = t.get();
  n.screener.candidates.length && Qs(() => $c(t, { event: e, forced: s }));
}
const zc = (t) => {
  t.on("screener/set", (e, s) => {
    if ("video_walkthrough" === (null == s ? void 0 : s.name)) {
      if (void 0 !== e.experiments.video_walkthrough) return;
      return (
        t.on("experiments/set", (e, n) => {
          let { experimentName: i, value: o } = n;
          if ("video_walkthrough" === i)
            return (
              t.dispatch("curiosity/enteredExperiment", {
                experiment: i,
                payload: { Segment: o },
              }),
              Bc(s),
              "on" === o
                ? {
                    screener: Object.assign({}, e.screener, {
                      candidates: [],
                      active: s,
                    }),
                  }
                : {
                    screener: Object.assign({}, e.screener, {
                      candidates: [],
                      active: void 0,
                    }),
                  }
            );
        }),
        void t.dispatch("experiments/activate", "video_walkthrough")
      );
    }
    return (
      s && Bc(s),
      { screener: Object.assign({}, e.screener, { candidates: [], active: s }) }
    );
  }),
    t.on(
      "screener/loaded",
      (e, s) => (
        Qs(() => $c(t, {})),
        {
          screener: Object.assign({}, e.screener, {
            candidates: s,
            active: void 0,
          }),
        }
      )
    ),
    t.on("screener/dismiss", (t) => {
      let { screener: e } = t;
      return (
        tc(Ja.SCREENER),
        { screener: Object.assign({}, e, { candidates: [], active: void 0 }) }
      );
    }),
    t.on("screener/accept", (t) => {
      let { screener: e } = t;
      return (
        tc(Ja.SCREENER),
        { screener: Object.assign({}, e, { candidates: [], active: void 0 }) }
      );
    });
  const e = (e, s) => {
    const { event: n } = s;
    e.screener.candidates.length && Qs(() => $c(t, { event: n }));
  };
  t.on("curiosity/conversion", e),
    t.on("curiosity/event", e),
    t.on("curiosity/vpt10", (e) => {
      e.screener.candidates.length &&
        Qs(() => $c(t, { event: "Viewed player tab for 10 minutes" }));
    }),
    t.on("screener/pressedEditor", () => Uc(t, "PressedEditor"));
};
async function Gc(t, e) {
  const s = t.get().textpage;
  if (s.slug !== e || s.isError)
    try {
      t.dispatch("textpage/load:processing", e);
      const s = await (async function (t) {
        const e = "/api/textpage/" + t,
          s = await fetch(e);
        return ir(s), s.json();
      })(e);
      s.slug === t.get().textpage.slug && t.dispatch("textpage/load:done", s);
    } catch (s) {
      e === t.get().textpage.slug && t.dispatch("textpage/load:error", s);
    }
}
const Hc = (t) => {
  t.on("textpage/load:processing", (t, e) => ({
    textpage: { slug: e, title: "", content: "", isLoading: !0, isError: !1 },
  })),
    t.on("textpage/load:done", (t, e) => ({
      textpage: Object.assign({}, e, { isLoading: !1, isError: !1 }),
    })),
    t.on("textpage/load:error", (t) => ({
      textpage: Object.assign({}, t.textpage, {
        title: "",
        content: "",
        isLoading: !1,
        isError: !0,
      }),
    }));
};
async function Wc(t) {
  if (void 0 === t.get().faq.content)
    try {
      t.dispatch("faq/load:processing");
      const e = await (async function () {
        const t = await fetch("/api/faq/compact");
        return ir(t), (await t.json()).filter((t) => t.isSRW);
      })();
      t.dispatch("faq/load:done", e);
    } catch (e) {
      t.dispatch("faq/load:error", e);
    }
}
const qc = (t) => {
    t.on("faq/load:processing", () => ({
      faq: { content: void 0, isLoading: !0, isError: !1 },
    })),
      t.on("faq/load:done", (t, e) => ({
        faq: { content: e, isLoading: !1, isError: !1 },
      })),
      t.on("faq/load:error", () => ({
        faq: { content: void 0, isLoading: !1, isError: !0 },
      }));
  },
  Vc = ["chordpro1", "chordpro2", "chordpro3"],
  Xc = (t) => {
    t.on("chords/load:processing", (t, e) => {
      let { songId: s, chordsRevisionId: n, ac: i } = e;
      return {
        chords: Object.assign({}, t.chords, {
          loading: { songId: s, chordsRevisionId: n, ac: i },
        }),
      };
    }),
      t.on("chords/load:done", (t, e) => {
        let { songId: s, chordsRevisionId: n, current: i } = e;
        return {
          chords: Object.assign({}, t.chords, {
            current: i,
            songId: s,
            chordsRevisionId: n,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          }),
        };
      }),
      t.on("chords/load:error", (t, e) => {
        let { songId: s, chordsRevisionId: n, error: i } = e;
        return {
          chords: Object.assign({}, t.chords, {
            current: null,
            songId: s,
            chordsRevisionId: n,
            isFailed: !0,
            isNetworkFailed: i instanceof Js && 0 === i.status,
            isNotFound:
              i instanceof Js && (404 === i.status || 400 === i.status),
            loading: null,
          }),
        };
      }),
      t.on("route/change", (e, s) => {
        let { routeContent: n } = s;
        n &&
          "chords" === n.page &&
          (async function (t, e, s) {
            const n = new nn();
            try {
              const i = t.get().chords,
                o = i.loading;
              o && o.ac.abort();
              const r = i.songId !== e,
                a = i.chordsRevisionId !== s;
              if (!i.isFailed && i.current && !r && !a)
                return void (await t.dispatch("chords/load:done", {
                  songId: e,
                  chordsRevisionId: s,
                  current: i.current,
                }));
              if (
                (await t.dispatch("chords/load:processing", {
                  songId: e,
                  chordsRevisionId: s,
                  songHasChanged: r,
                  chordsRevisionHasChanged: a,
                  ac: n,
                }),
                n.signal.aborted)
              )
                return;
              let c = t.get().chords.current;
              if (
                (!c || c.songId !== e || (s && c.chordsRevisionId !== s)) &&
                ((c = await (async function (t, e, s) {
                  const n = `/api/chords/${t}${e ? `/${e}` : ""}`,
                    i = await Ks(() => n, "meta", s);
                  return s.aborted || !i ? null : i;
                })(e, s, n.signal)),
                n.signal.aborted || !c)
              )
                return;
              await t.dispatch("chords/load:done", {
                songId: e,
                chordsRevisionId: s,
                current: c,
              });
            } catch (i) {
              if (n.signal.aborted) return;
              t.dispatch("chords/load:error", {
                songId: e,
                chordsRevisionId: s,
                error: i,
              });
            }
          })(t, n.songId, n.chordsRevisionId);
      });
  },
  Yc = (t) => {
    t.on("chords/load:done", async (e, s) => {
      let { current: n } = s;
      const i = n.songId,
        o = n.chordsRevisionId,
        r = new nn();
      try {
        const s = e.chordpro.loading;
        if (s) {
          if (i === s.songId && o === s.chordsRevisionId) return;
          s.ac.abort();
        }
        if (
          !e.chordpro.isFailed &&
          e.chordpro.current &&
          i === e.chordpro.songId &&
          o === e.chordpro.chordsRevisionId
        )
          return void t.dispatch("chordpro/load:done", {
            songId: i,
            chordsRevisionId: o,
            current: e.chordpro.current,
          });
        await t.dispatch("chordpro/load:processing", {
          songId: i,
          chordsRevisionId: o,
          ac: r,
        });
        const a = await (async function (t, e, s, n) {
          let i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { Accept: "text/plain" };
          const o = `chordpro_${e}_${s || ""}`,
            r = await Hs(o);
          if (r && r.data) return r.data;
          const a = `${t}/${e}/${s}.chordpro`,
            c = (t) => {
              const e = (t % Vc.length) + 1;
              return e < Vc.length
                ? `https://${Vc[e]}.songsterr.com/${a}`
                : `https://www.songsterr.com/cdn/chordpro/${a}`;
            },
            l = await Ks(c, "chordpro", n, i);
          return !l || n.aborted ? null : (await Ws(o, { data: l }), l);
        })(i, o, n.chordpro, r.signal);
        if (!a || r.signal.aborted) return;
        await t.dispatch("chordpro/load:raw", {
          songId: i,
          chordsRevisionId: o,
          chordpro: a,
          signal: r.signal,
        });
      } catch (e) {
        if ((console.log("chordpro error", r.signal.aborted), r.signal.aborted))
          return;
        await t.dispatch("chordpro/load:error", {
          songId: i,
          chordsRevisionId: o,
          error: e,
        });
      }
    }),
      t.on("chordpro/load:processing", (t, e) => {
        let { songId: s, chordsRevisionId: n, ac: i } = e;
        return {
          chordpro: Object.assign({}, t.chordpro, {
            loading: { songId: s, chordsRevisionId: n, ac: i },
          }),
        };
      }),
      t.on("chordpro/load:raw", async (e, s) => {
        let { songId: n, chordsRevisionId: i, chordpro: o } = s;
        try {
          const e = (0, (await import("./split.4c4c9662.js")).split)(o);
          t.dispatch("chordpro/load:done", {
            songId: n,
            chordsRevisionId: i,
            current: e,
          });
        } catch (e) {
          t.dispatch("chordpro/load:error", {
            songId: n,
            chordsRevisionId: i,
            error: e,
          });
        }
      }),
      t.on("chordpro/load:done", (t, e) => {
        let { songId: s, chordsRevisionId: n, current: i } = e;
        return {
          chordpro: Object.assign({}, t.chordpro, {
            current: i,
            songId: s,
            chordsRevisionId: n,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null,
          }),
        };
      }),
      t.on("chordpro/load:error", (t, e) => {
        let { songId: s, chordsRevisionId: n, error: i } = e;
        return {
          chordpro: Object.assign({}, t.chordpro, {
            current: null,
            songId: s,
            chordsRevisionId: n,
            isFailed: !0,
            isNetworkFailed: i instanceof Js && 0 === i.status,
            isNotFound:
              i instanceof Js && (404 === i.status || 400 === i.status),
            loading: null,
          }),
        };
      }),
      t.on("chords/load:processing", (t, e) => ({
        chordpro: Object.assign({}, t.chordpro, { current: null }),
      })),
      t.on("chordpro/load:error", (t, e) => {
        let { error: s } = e;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(s),
          console.error(s);
      });
  },
  Jc = (t) => {
    t.on("cursor/failed", () => ({ cursor: { isFailed: !0 } })),
      t.on("cursor/failed", (t, e) => {
        let { error: s } = e;
        try {
          "Sentry" in window &&
            "function" == typeof window.Sentry.captureException &&
            window.Sentry.captureException(s);
        } catch (t) {}
        console.error(s);
      }),
      t.on("meta/load:processing", (t, e) => {
        let { songHasChanged: s } = e;
        if (s) return { cursor: { isFailed: !1 } };
      }),
      t.on("part/load:done", () => ({ cursor: { isFailed: !1 } }));
  },
  Kc = (t) => {
    t.on("route/change", (e, s) => {
      let { routeContent: n, queryContent: i } = s;
      !n ||
        ("tag" !== n.page && "tags" !== n.page) ||
        (async function (t, e, s) {
          const n = new nn();
          try {
            const r = t.get().tags,
              a = r.loading;
            if (
              (a && a.ac.abort(),
              (i = e),
              (o = r.route) &&
                (("tag" === i.page && "tag" === o.page && i.name === o.name) ||
                  ("tags" === i.page && "tags" === o.page)) &&
                (function (t, e) {
                  return (!t.page && !e.page) || t.page === e.page;
                })(s, r.query))
            )
              return void (await t.dispatch("tags/load:done", {
                route: e,
                query: s,
                content: r.content,
              }));
            if (
              (await t.dispatch("tags/load:processing", {
                route: e,
                query: s,
                ac: n,
              }),
              n.signal.aborted)
            )
              return;
            const c = await (async function (t, e, s) {
              let n;
              n =
                "tags" === t.page
                  ? "/api/next/tags" + (e.page ? `?page=${e.page}` : "")
                  : `/api/next/tags/${t.name}${
                      e.page ? `?page=${e.page}` : ""
                    }`;
              const i = n,
                o = await Ks(() => i, "tags", s);
              return s.aborted || !o ? null : o;
            })(e, s, n.signal);
            await t.dispatch("tags/load:done", {
              route: e,
              query: s,
              content: c,
            });
          } catch (i) {
            if (n.signal.aborted) return;
            console.error(i),
              await t.dispatch("tags/load:error", {
                route: e,
                query: s,
                error: i,
              });
          }
          var i, o;
        })(t, n, i || {});
    }),
      t.on("tags/load:processing", (t, e) => {
        let { route: s, query: n, ac: i } = e;
        return {
          tags: Object.assign({}, t.tags, {
            loading: { route: s, query: n, ac: i },
          }),
        };
      }),
      t.on("tags/load:done", (t, e) => {
        let { route: s, query: n, content: i } = e;
        return {
          tags: Object.assign({}, t.tags, {
            content: i,
            route: s,
            query: n,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          }),
        };
      }),
      t.on("tags/load:error", (t, e) => {
        let { route: s, query: n, error: i } = e;
        return {
          tags: Object.assign({}, t.tags, {
            current: null,
            route: s,
            query: n,
            loading: null,
            isFailed: !0,
            isNetworkFailed: i instanceof Js && 0 === i.status,
            isNotFound:
              i instanceof Js && (404 === i.status || 400 === i.status),
          }),
        };
      }),
      t.on("tags/load:error", (t, e) => {
        let { error: s } = e;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(s),
          console.error(s);
      });
  },
  Qc = (t) => {
    t.on("chords/load:processing", () => ({ chordDiagram: [] })),
      t.on("chordDiagram/clear", () => ({ chordDiagram: [] })),
      t.on("chordDiagram/open", (t, e) => {
        const s = t.chordDiagram.find((t) => t.chord === e.chord);
        return s
          ? { chordDiagram: t.chordDiagram.filter((t) => t !== s) }
          : { chordDiagram: [...t.chordDiagram, e] };
      }),
      t.on("chordDiagram/close", (t, e) => ({
        chordDiagram: t.chordDiagram.filter((t) => t !== e),
      }));
  },
  Zc = {
    aa: !0,
    drum_standard_notation: [],
    new_sound: [],
    new_sound_control: [],
    video_walkthrough: !1,
    chat: !0,
  },
  tl = ["drum_standard_notation", "new_sound", "new_sound_control"];
for (const t of Object.keys(Zc)) {
  const e = Zc[t];
  if (e && Array.isArray(e) && 0 != ((el = e.length) & (el - 1)))
    throw new Error("Experiment variations can't be evenly distributed");
}
var el;
function sl(t) {
  const e = t + "=",
    s = document.cookie.split(";");
  for (let t = 0; t < s.length; t++) {
    let n = s[t];
    for (; " " === n.charAt(0); ) n = n.substring(1, n.length);
    if (0 === n.indexOf(e)) return n.substring(e.length, n.length);
  }
  return null;
}
function nl(t, e) {
  const s = new Date();
  s.setTime(s.getTime() + 31536e6),
    (document.cookie = `${t}=${e};expires=${s.toUTCString()};path=/`);
}
const il = [],
  ol = [
    "drawing",
    "promo_slowdown",
    "promo_slowdown_faster",
    "nossr",
    "new_sound",
    "plus_promo",
    "submit_promo",
    "plus_banners",
    "hidden_chords",
    "report",
    "googlefc",
    "bpm_speed",
    "jamplay",
  ];
let rl, al;
function cl() {
  return Math.floor(65536 * (1 + Math.random()))
    .toString(16)
    .substring(1);
}
void 0 !== document.hidden
  ? ((rl = "hidden"), (al = "visibilityState"))
  : void 0 !== document.mozHidden
  ? ((rl = "mozHidden"), (al = "mozVisibilityState"))
  : void 0 !== document.msHidden
  ? ((rl = "msHidden"), (al = "msVisibilityState"))
  : void 0 !== document.webkitHidden &&
    ((rl = "webkitHidden"), (al = "webkitVisibilityState"));
const ll = "Print--plus",
  dl = "Print--free";
function ul(t) {
  const e = t.rules || t.cssRules;
  for (const t of e)
    if (t.style.content && t.style.content.length) {
      const e =
          cl() +
          cl() +
          "-" +
          cl() +
          "-" +
          cl() +
          "-" +
          cl() +
          "-" +
          cl() +
          cl() +
          cl(),
        s =
          t.style.content.substring(0, 62) +
          e +
          t.style.content.substring(62 + e.length);
      s.length === t.style.content.length
        ? (t.style.content = s)
        : console.error("Something wrong with tracker url length");
    }
}
function hl(t) {
  return t
    .split("+")
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .join(" ");
}
const pl = "Songsterr",
  gl = "Songsterr Tabs with Rhythm",
  fl = {
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
    chords: "",
    search: "",
    artist: "",
  };
function ml(t) {
  let e =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Guitar";
  if (t) {
    if ("DRUMS" === t.instrument) return "Drum";
    if ("BASS" === t.instrument) return "Bass";
    if ("GUITAR" === t.instrument) return "Guitar";
  }
  return e;
}
function yl(t) {
  (document.title = (function (t) {
    const e = t.route;
    return "artist" === e.page
      ? (function (t) {
          return [
            t.artist && t.artist.pattern && bl(t.artist.pattern),
            Sl(t),
            gl,
          ]
            .filter(Boolean)
            .join(" | ");
        })(t)
      : "tab" === e.page
      ? (function (t) {
          const { meta: e } = t;
          if (!e.current) return [gl, "Free online tab player"];
          const s = Mc(e);
          let n = "";
          (function (t, e) {
            if (!e || !t.current || !t.current.tracks) return !1;
            let s = null;
            return (
              ye(e.instrumentId)
                ? (s = ye)
                : be(e.instrumentId)
                ? (s = be)
                : ve(e.instrumentId) && (s = ve),
              !s || je(e, t.current.tracks, s)
            );
          })(e, s) && (n = ` - ${s.title.replace(/\u00a0/g, " ")}`);
          const i = ((t) =>
              t
                ? ((t.isBassGuitar ? " Bass" : t.isDrums && " Drum") || "") +
                  " Tab"
                : " Tab")(s),
            o = e.allowedByLicense
              ? ""
              : " (Temporary Removed by Music Publisher) ",
            r = `${e.current.title}${i} by ${e.current.artist}${n}`;
          return [
            `${r}${o} | ${gl}`,
            `${r} with free online tab player. One accurate version. Recommended by The Wall Street Journal`,
          ];
        })(t)[0]
      : "chords" === e.page
      ? (function (t) {
          const { chords: e } = t;
          if (!e.current) return gl;
          const { title: s, artist: n } = e.current;
          return `${s} Chords by ${n} | ${gl}`;
        })(t)
      : "search" === e.page
      ? (function (t) {
          return [t.songs && t.songs.pattern && bl(t.songs.pattern), wl(t), pl]
            .filter(Boolean)
            .join(" | ");
        })(t)
      : "tag" === e.page || "tags" === e.page
      ? (function (t) {
          const {
            tags: {
              content: e,
              route: s,
              query: n,
              isFailed: i,
              isNotFound: o,
            },
          } = t;
          if (!e || i || o)
            return `${o ? "Not Found" : "Something Went Wrong"} | ${gl}`;
          const r = n.page ? ` Page ${n.page}` : "";
          return (
            "Top " +
            ("tag" === s.page ? `${hl(s.name)} Tabs` : "Tags") +
            r +
            ` | ${gl}`
          );
        })(t)
      : (function (t) {
          return [El(t), gl].join(" | ");
        })(t);
  })(t)),
    window.ga &&
      window.ga("send", "pageview", {
        location: window.location.href,
        title: document.title,
      }),
    (function (t) {
      try {
        const t = document.styleSheets;
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          "print" === s.media.mediaText &&
            "print-ga" === s.ownerNode.id &&
            ul(s);
        }
      } catch (t) {
        console.error("PrintTracker: " + t);
      }
    })(
      (function (t) {
        "tab" === t.route.page && t.meta.current
          ? (t.route.page, t.meta.current.artist, t.meta.current.title)
          : t.route.page;
      })(t)
    );
}
F.map((t) => {
  let [e, s] = t;
  return "string" == typeof e && "string" == typeof s.page
    ? { [s.page]: e }
    : {};
}).reduce((t, e) => Object.assign(t, e), {});
const vl = (t, e) => t.artist.artists[e] || "Unknown Artist",
  bl = (t) => (t.length > 0 ? `Search results for: '${t}'` : void 0),
  wl = (t) =>
    [ml(t.songs && t.songs.filters, "Guitar"), "Tabs with Rhythm"].join(" "),
  Sl = (t) =>
    [
      vl(t, +t.route.artistId),
      ml(t.artist && t.artist.filters, ""),
      "Tabs",
    ].join(" "),
  El = (t) => fl[t.route.page] || "",
  Il = {
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
  xl = (t) =>
    -1 !== tl.indexOf(t) ? `Experiment: ${t}` : `Experiment: SRW ${t}`,
  kl = (t) => {
    {
      let r,
        a,
        c = {};
      function e(t) {
        c = hr("curiosity_sent_events") || c;
        const e = !c[t];
        return e && ((c[t] = !0), pr("curiosity_sent_events", c)), e;
      }
      function s(t) {
        window.amplitude.getInstance().setUserId(t.id);
      }
      function n() {
        window.amplitude.getInstance().setUserId(null);
      }
      {
        function i(t, s) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          try {
            const o = t.user.isLoggedIn ? t.user.profile.plan : "FREE",
              r = t.user.isLoggedIn,
              a = Object.assign(
                {
                  Plan: o,
                  "Signed in": r,
                  Legacy: !1,
                  Url: window.location.href,
                  Referer: t.curiosity.referer.last,
                },
                n
              ),
              c = e(s);
            if (i && !c) return;
            !i && c && (a["First time"] = !0);
            const l = new window.amplitude.Identify();
            l.set("Plan", o), l.set("Signed in", r);
            for (const e in t.experiments)
              Object.prototype.hasOwnProperty.call(t.experiments, e) &&
                l.set(xl(e), t.experiments[e]);
            for (const t of ol) l.unset(xl(t));
            l.unset("Referer"),
              t.curiosity.referer.last &&
                l.set("Last referer", t.curiosity.referer.last),
              t.curiosity.referer.original &&
                l.set("Original referer", t.curiosity.referer.original);
            const d = window.amplitude.getInstance();
            d.identify(l),
              d.logEvent(s, a),
              "prod" !== window.__STAGE__ && console.log(`AD: ${s}`, a, l);
          } catch (t) {
            console.error(t), window.Sentry.captureException(t);
          }
        }
        t.on("curiosity/conversion", (e, s) => {
          i(
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
            i(t, e.event, Object.assign({}, e, { event: void 0 }));
          }),
          t.on("curiosity/visitedPage", (t) => {
            ("on" !== t.experiments.chat && "off" !== t.experiments.chat) ||
              (Math.random() < 0.1 && i(t, "Shown Community Button", {}, !0));
          }),
          t.on("curiosity/enteredExperiment", (t, e) => {
            let { experiment: s, payload: n } = e;
            ((t) => {
              let e = JSON.parse(sl("EE_STORAGE")) || [];
              Array.isArray(e) || (e = []);
              const s = -1 !== e.indexOf(t);
              s || (e.push(t), nl("EE_STORAGE", JSON.stringify(e)));
              let n = hr("EE_STORAGE") || [];
              Array.isArray(n) || (n = []);
              const i = -1 !== n.indexOf(t);
              i || (n.push(t), pr("EE_STORAGE", n));
              const o = -1 !== il.indexOf(t);
              return o || il.push(t), !!(s || i || o);
            })(s) || i(t, `Entered experiment: SRW ${s}`, n);
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
            "prod" !== window.__STAGE__ && console.log(`GA: ${e.category}`, e);
        } catch (t) {
          console.error(t), window.Sentry.captureException(t);
        }
      }),
        t.on("curiosity/error", (e, s) => {
          let { error: n, message: i } = s;
          t.dispatch("curiosity/event", {
            event: "Error",
            Error: n,
            Message: i,
          }),
            t.dispatch("curiosity/google", {
              category: "Error",
              action: n,
              label: i,
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
          clearTimeout(r),
            Po.reset(),
            (r = setTimeout(() => t.dispatch("curiosity/vpt10"), 6e5));
        }),
        t.on("curiosity/countdown:clear", () => {
          clearTimeout(r);
        }),
        t.on("curiosity/vcp5:start", () => {
          clearTimeout(a),
            Po.reset(),
            (a = setTimeout(() => t.dispatch("curiosity/vc5"), 3e5));
        }),
        t.on("curiosity/vcp5:clear", () => {
          clearTimeout(a);
        }),
        t.on("meta/load:processing", () => {
          clearTimeout(r), clearTimeout(a);
        }),
        t.on("curiosity/vc5", () => {
          t.dispatch("curiosity/google", {
            category: "Player",
            action: "Viewed chords for 5 minutes",
          });
        }),
        t.on("curiosity/vpt10", (e) => {
          const s = Po.getTimeSinceLastActivity();
          if (s >= 5) return;
          const n = e.meta,
            i = Mc(n),
            o = "Viewed player tab for 10 minutes";
          if (n.current && e.part.current) {
            const r = n.current,
              a = e.part.current;
            !(async function (t, e) {
              try {
                await nr("/api/event/", {
                  event: "Viewed player tab for 10 minutes",
                  payload: e,
                });
              } catch (t) {
                console.error(t);
              }
            })(0, {
              songId: n.songId,
              revisionId: r.revisionId,
              artistId: r.artistId,
              partId: n.partId,
              instrumentId: i && i.instrumentId,
            }),
              t.dispatch(
                "curiosity/event",
                Object.assign(
                  { event: o },
                  e.curiosity.VPT10Props,
                  rl
                    ? {
                        "Web document is hidden": document[rl],
                        "Web document visibility": document[al],
                      }
                    : {},
                  {
                    Orientation: window.matchMedia("(orientation: portrait)")
                      .matches
                      ? "portrait"
                      : "landscape",
                    Fullscreen: e.screen.fullscreen,
                    Instrument: a.instrument,
                    Difficulty: i && i.difficulty,
                    "Minutes Since Last Activity": s,
                    Artist: r.artist,
                    Title: r.title,
                    "Song id": n.songId.toString(),
                    "Track id": i && i.partId.toString(),
                    "Has chords": a.withChords,
                    "Has chords link": r.hasChords || !1,
                    "Sound version": e.player.version,
                    Tags: n.current.tags,
                  }
                )
              ),
              t.dispatch("curiosity/google", { category: "Player", action: o });
          }
        });
      const l = {};
      function o(t) {
        return (e) => ({
          curiosity: Object.assign({}, e.curiosity, {
            VPT10Props: Object.assign({}, e.curiosity.VPT10Props, { [t]: !0 }),
          }),
        });
      }
      t.on("curiosity/trigerHJ", (t, e) => {
        l[e] ||
          t.screener.active ||
          (console && console.info("hotjar event", e),
          window &&
            "function" == typeof window.hj &&
            (window.hj("trigger", e), (l[e] = !0)));
      }),
        t.on("user/signIn", (e, n) => {
          s(n),
            t.dispatch("curiosity/conversion", {
              event: "Signed in",
              "Auth method": "Email",
            });
        }),
        t.on("user/googleSignIn", (e, n) => {
          const { profile: i, isCreated: o } = n;
          s(i),
            t.dispatch("curiosity/conversion", {
              event: o ? "Signed up" : "Signed in",
              "Auth method": "Google",
            });
        }),
        t.on("user/signUp", (e, n) => {
          s(n),
            t.dispatch("curiosity/conversion", {
              event: "Signed up",
              "Auth method": "Email",
            });
        }),
        t.on("user/profile", (t, e) => {
          s(e);
        }),
        t.on("user/subscribePlus", (e, n) => {
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
            s(wr(e, n));
        }),
        t.on("user/signOut", () => {
          t.dispatch("curiosity/event", { event: "Signed out" }), n();
        }),
        t.on("user/recoverPassword", (t, e) => {
          s(e);
        }),
        t.on("user/cancelPlus", (e, n) => {
          s(n),
            t.dispatch("curiosity/conversion", {
              event: "Canceled subscription",
            });
        }),
        t.on("user/deactivate", () => {
          t.dispatch("curiosity/conversion", { event: "Deactivated account" }),
            n();
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
            message: s.message,
          })
        ),
        t.on("favorites/add", async (e, s) => {
          let { songId: n, song: i } = s;
          return t.dispatch("curiosity/event", {
            event: "Added favorite",
            Title: i.title,
            Artist: i.artist,
            "Song id": n.toString(),
          });
        }),
        t.on("favorites/delete:processing", async (e, s) => {
          let { songId: n, song: i } = s;
          return t.dispatch("curiosity/event", {
            event: "Removed favorite",
            Title: i.title,
            Artist: i.artist,
            "Song id": n.toString(),
          });
        }),
        t.on("upload/song:uploaded", (e, s) => {
          let { songSubmitted: n, song: i } = s;
          n &&
            t.dispatch("curiosity/event", {
              event: "Submitted tab",
              Artist: i.artist,
              Title: i.title,
            });
        }),
        t.on("upload/song:error", (e, s) => {
          let { error: n } = s;
          t.dispatch("curiosity/error", {
            error: "Submitted tab",
            message: n.message,
          });
        }),
        t.on("upload/revision:uploaded", (e, s) => {
          let { revisionSubmitted: n, revision: i } = s;
          n &&
            t.dispatch("curiosity/event", {
              event: "Submitted revision",
              Artist: i.artist,
              Title: i.title,
            });
        }),
        t.on("upload/revision:error", (e, s) => {
          let { error: n } = s;
          t.dispatch("curiosity/error", {
            error: "Submitted revision",
            message: n.message,
          });
        }),
        t.on("meta/load:processing", (t, e) => {
          let { songHasChanged: s } = e;
          if (s)
            return {
              curiosity: Object.assign({}, t.curiosity, { VPT10Props: Il }),
            };
        }),
        t.on("player/changeSpeed", o("Used speed")),
        t.on("player/togglePlay", o("Used playback")),
        t.on("player/toggleLoop", o("Used loop")),
        t.on("player/changePitch", o("Used pitchshift")),
        t.on("player/changeLoop", o("Used loop")),
        t.on("player/toggleCountIn", o("Used countin")),
        t.on("player/toggleMetronome", o("Used metronome")),
        t.on("player/changeType", (t, e) => {
          let { type: s } = e;
          return "solo" === s
            ? o("Used solo")(t)
            : "mute" === s
            ? o("Used mute")(t)
            : void 0;
        }),
        t.on("screen/toggleFullscreen", (t, e) => {
          let { enabled: s } = e;
          return s && o("Used Fullscreen")(t);
        }),
        t.on("screener/set", (e, s) => {
          s &&
            !s.disableEvents &&
            t.dispatch("curiosity/event", {
              event: "Screener shown",
              Header: s.title,
              Name: s.name,
            });
        }),
        t.on("route/change", (e, s) => {
          let { route: n } = s;
          "tab" !== n.page &&
            "chords" !== n.page &&
            "search" !== n.page &&
            "artist" !== n.page &&
            yl(e),
            t.dispatch("curiosity/countdown:clear"),
            t.dispatch("curiosity/vcp5:clear");
        }),
        t.on("meta/load:done", (e) => {
          "tab" === e.route.page &&
            (yl(e), t.dispatch("curiosity/countdown:start"));
        }),
        t.on("chords/load:done", (e) => {
          "chords" === e.route.page &&
            (yl(e), t.dispatch("curiosity/vcp5:start"));
        }),
        t.on("screener/accept", (e, s) => {
          s &&
            t.dispatch("curiosity/event", {
              event: `Screener clicked: ${s.name}`,
            });
        });
    }
  },
  Tl = ["formX", "formY", "fret", "beatNum", "measureNum"],
  Ol = ["formX", "formY", "fret", "beatNum", "measureNum"],
  Al = [2182125, 1888170, 2255715],
  Pl = () => hr("hasSeenEditor") || !1,
  Ll = () => pr("hasSeenEditor", !0);
function Cl(t) {
  return (t.returnValue = "o/"), "o/";
}
let Nl, Rl;
const jl = function (t, e, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      i = t,
      o = n;
    const r = i.layout,
      a = r.measureLayout.lineLayout.stringY,
      c = r.measureLayout.measure.index,
      l = r.absoluteX * s,
      d = (a + 12 * (e - 1)) * s;
    let u = "";
    const h = i.notes.find((t) => t.string === e && !t.bogus);
    if (h) u = h.dead ? "X" : h.fret;
    else {
      const t = r.beats.filter((t) => 0 !== t.notes.length && t.voice !== n);
      for (const s of t) {
        const t = s.notes.find((t) => t.string === e && !t.bogus);
        t && ((u = t.fret), (i = s), (o = s.voice));
      }
    }
    return {
      formX: l,
      formY: d,
      fret: u,
      measureNum: c,
      beatNum: i.index,
      beat: i,
      voice: o,
    };
  },
  _l = (t, e, s, n, i) => {
    if (t) {
      const o = t[e];
      if (o && o.beats) {
        const t = o.beats.find((t) => t.beatNum === s && t.voice === i);
        if (t && t.editedNotes) {
          const e = t.editedNotes.find((t) => t.string === n);
          if (e) return e.fret;
        }
      }
    }
  },
  Ml = (t) => {
    t.on("@init", () => ({
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
      t.on("layer/show", (t, e) => {
        let { tabEditor: s } = t;
        if ("tab_editor" === e)
          return {
            tabEditor: Object.assign({}, s, {
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
            }),
          };
      }),
      t.on("tabEditor/setForm", (e, s) => {
        let { beatsLayout: n, touch: i, scale: o } = s;
        const r = n.measureLayout.lineLayout.stringY,
          a = n.measureLayout.lineLayout.line.strings,
          c = i.y - r;
        if (c < -10 || c > 73) return;
        const l = Math.floor(c / 12);
        let d,
          u,
          h = c - 12 * l <= 6 ? l : l + 1;
        h < 0 ? (h = 0) : h >= a && (h = a - 1);
        for (const t of n.beats)
          if (!t.rest && 0 !== t.notes.length) {
            for (const e of t.notes)
              if (e.string === h && !e.bogus) {
                (d = t.voice), (u = t);
                break;
              }
            if (void 0 !== d) break;
          }
        if (void 0 === d) {
          if (((u = n.beats.find((t) => !t.rest && 0 !== t.notes.length)), !u))
            return;
          d = u.voice;
        }
        const p = jl(u, h, o, d),
          { formX: g, formY: f, fret: m, beatNum: y, measureNum: v } = p,
          w = b(p, Tl),
          S = _l(e.tabEditor.data, v, y, h, w.voice),
          { device: E } = e;
        return (
          !(Cs(E) || Ps(E.os) || Ls(E.os)) &&
            t.dispatch("player/moveCursor", {
              cursor: w.beat.layout.leftTime,
              loopStart: e.player.position.loopStart,
              loopEnd: e.player.position.loopEnd,
            }),
          {
            tabEditor: Object.assign({}, e.tabEditor, {
              positioned: !0,
              formX: g,
              formY: f,
              fret: void 0 !== S ? `${S}` : `${m}`,
              originalFret: `${m}`,
              beat: u,
              beatNum: y,
              stringNum: h,
              measureNum: v,
              voice: d,
            }),
          }
        );
      }),
      t.on("tabEditor/formMove", (e, s) => {
        let { tabEditor: n, player: i, device: o } = e,
          { scale: r, direction: a } = s;
        const { stringNum: c, beat: l, positioned: d } = n;
        if (!d) return;
        let u = l,
          h = c;
        const p = u.layout.measureLayout.lineLayout.line.strings;
        if ("up" === a) (h = c - 1), h < 0 && (h = p - 1);
        else if ("down" === a) (h = c + 1), h >= p && (h = 0);
        else if ("right" === a || "left" === a) {
          const t = "right" === a ? "nextBeat" : "prevBeat";
          do {
            const e = u;
            if (
              ((u = e[t]), !u && !e.layout.beats.find((e) => e[t] && !e.lyrics))
            )
              return;
            let s = u.layout.measureLayout.measure.index;
            for (const n of e.layout.beats) {
              if (!n[t] || n.lyrics || 0 === n.notes.length) continue;
              const e = n[t],
                i = e.layout.measureLayout.measure.index;
              if (("right" === a && i < s) || ("left" === a && i > s))
                (s = i), (u = e);
              else if (i === s) {
                const t = u.duration[0] / u.duration[1];
                n.duration[0] / n.duration[1] < t && ((s = i), (u = e));
              }
            }
            if (u.rest) {
              const t = u.layout.beats.find(
                (t) => !t.rest && !t.lyrics && 0 !== t.notes.length
              );
              t && (u = t);
            }
          } while (!0 === u.rest);
        }
        const g = jl(u, h, r, u.voice),
          { formX: f, formY: m, fret: y, beatNum: v, measureNum: w } = g,
          S = b(g, Ol),
          E = _l(n.data, w, v, h, S.voice);
        return (
          !(Cs(o) || Ps(o.os) || Ls(o.os)) &&
            t.dispatch("player/moveCursor", {
              cursor: S.beat.layout.leftTime,
              loopStart: i.position.loopStart,
              loopEnd: i.position.loopEnd,
            }),
          {
            tabEditor: Object.assign({}, n, {
              positioned: !0,
              formX: f,
              formY: m,
              fret: void 0 !== E ? `${E}` : `${y}`,
              originalFret: `${y}`,
              beat: S.beat,
              voice: S.voice,
              beatNum: v,
              stringNum: h,
              measureNum: w,
            }),
          }
        );
      }),
      t.on("screen/resize", (t) => {
        let { tabEditor: e } = t;
        if (e.positioned)
          return {
            tabEditor: Object.assign({}, e, {
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              fret: "",
              originalFret: "",
            }),
          };
      }),
      t.on("tabEditor/changeNote", (e, s) => {
        let { tabEditor: n, part: i, user: o } = e;
        const {
          measureNum: r,
          fret: a,
          originalFret: c,
          stringNum: l,
          beatNum: d,
          voice: u,
          positioned: h,
        } = n;
        if (!h || s === a) return;
        let p;
        if (n.data) p = [...n.data];
        else {
          const t = i.current.measures.length;
          p = new Array(t);
        }
        let g = p[r];
        if (g && g.beats) {
          g = { beats: [...g.beats] };
          const t = g.beats.findIndex((t) => t.beatNum === d && t.voice === u);
          if (-1 === t)
            g.beats.push({
              beatNum: d,
              voice: u,
              editedNotes: [{ string: l, fret: s, originalFret: c }],
            });
          else {
            const e = g.beats[t];
            e.editedNotes = [...e.editedNotes];
            const n = e.editedNotes.findIndex((t) => t.string === l);
            -1 !== n &&
              (e.editedNotes = e.editedNotes
                .slice(0, n)
                .concat(e.editedNotes.slice(n + 1))),
              ("" === c && "" === s) ||
                c === s ||
                e.editedNotes.push({ string: l, fret: s, originalFret: c }),
              0 === e.editedNotes.length &&
                (g.beats = g.beats.slice(0, t).concat(g.beats.slice(t + 1))),
              0 === g.beats.length && (g = void 0);
          }
          p[r] = g;
        } else
          (g = {
            beats: [
              {
                beatNum: d,
                voice: u,
                editedNotes: [{ string: l, fret: s, originalFret: c }],
              },
            ],
          }),
            (p[r] = g);
        return (
          window.addEventListener("beforeunload", Cl),
          clearTimeout(Nl),
          (Nl = setTimeout(() => Uc(t, "TriedEditor"), 2e4)),
          o.isLoggedIn &&
            (clearTimeout(Rl),
            (Rl = setTimeout(() => t.dispatch("tabEditor/save"), 3e3))),
          {
            tabEditor: Object.assign({}, n, {
              data: p,
              fret: s,
              status: "changes",
            }),
          }
        );
      });
    const e = (e) => {
      let { tabEditor: s } = e;
      "changes" === s.status && t.dispatch("tabEditor/save");
    };
    t.on("user/signIn", e),
      t.on("user/googleSignIn", e),
      t.on("user/signUp", e),
      t.on("tabEditor/save", async (e) => {
        let { meta: s, part: n, tabEditor: i, user: o } = e;
        try {
          "changes" === i.status &&
            o.isLoggedIn &&
            (t.dispatch("tabEditor/save:changeStatus", "saving"),
            await (async function (t, e, s, n) {
              const i = { songId: t, part: e, revision: s },
                o = [];
              n.forEach((t, e) => {
                t && o.push(Object.assign({}, t, { index: e }));
              }),
                0 !== o.length &&
                  (i.data = JSON.stringify({
                    measuresCount: n.length,
                    packedData: o,
                  }));
              const r = await nr("/api/tab-editor", i);
              return ir(r), r.json();
            })(s.songId, n.partId, n.revisionId, i.data),
            Math.random() < 0.1 &&
              t.dispatch("curiosity/event", {
                event: "Autosaved tab edit 10% sampling",
              }),
            setTimeout(
              () => t.dispatch("tabEditor/save:changeStatus", "saved"),
              1e3
            ));
        } catch (t) {
          console.log(t);
        }
      }),
      t.on("tabEditor/save:changeStatus", (t, e) => {
        if ("saved" !== e || "changes" !== t.tabEditor.status)
          return (
            "saved" === e && window.removeEventListener("beforeunload", Cl),
            { tabEditor: Object.assign({}, t.tabEditor, { status: e }) }
          );
      }),
      t.on("part/load:raw", () => {
        t.dispatch("tabEditor/load");
      }),
      t.on("tabEditor/load", async (e) => {
        let { user: s, part: n, query: i } = e;
        try {
          if ((t.dispatch("tabEditor/load:flush"), s.isLoggedIn)) {
            var o;
            const { songId: e, partId: r, revisionId: a } = n;
            let c;
            (c =
              void 0 !== i.tabedit &&
              (s.isAdmin ||
                Al.includes(
                  null === (o = s.profile) || void 0 === o ? void 0 : o.id
                ))
                ? await (async function (t) {
                    const e = `/api/tab-editor/${t}`,
                      s = await fetch(e);
                    ir(s);
                    const n = await s.json();
                    if (!n.data) return;
                    const i = JSON.parse(n.data),
                      o = Array(i.measuresCount);
                    return (
                      i.packedData.forEach((t) => {
                        const e = t.index;
                        delete t.index, (o[e] = t);
                      }),
                      {
                        songId: n.songId,
                        part: n.part,
                        revision: n.revision,
                        data: o,
                      }
                    );
                  })(+i.tabedit)
                : await (async function (t, e, s) {
                    const n = `/api/tab-editor?songId=${t}&part=${e}&revision=${s}`,
                      i = await fetch(n);
                    ir(i);
                    const o = await i.json();
                    if (!o.data) return;
                    const r = JSON.parse(o.data),
                      a = Array(r.measuresCount);
                    return (
                      r.packedData.forEach((t) => {
                        const e = t.index;
                        delete t.index, (a[e] = t);
                      }),
                      {
                        songId: o.songId,
                        part: o.part,
                        revision: o.revision,
                        data: a,
                      }
                    );
                  })(e, r, a)),
              c &&
                t.dispatch("tabEditor/load:done", {
                  songId: c.songId,
                  part: c.part,
                  data: c.data,
                });
          }
        } catch (t) {
          console.log(t);
        }
      }),
      t.on("tabEditor/load:flush", (t) => {
        let { tabEditor: e } = t;
        return (
          window.removeEventListener("beforeunload", Cl),
          {
            tabEditor: Object.assign({}, e, {
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
            }),
          }
        );
      }),
      t.on("tabEditor/load:done", (t, e) => {
        let { songId: s, part: n, data: i } = e;
        if (s === t.part.songId && n === t.part.partId)
          return { tabEditor: Object.assign({}, t.tabEditor, { data: i }) };
        console.log("Loaded tab editor data lost its relevance");
      }),
      t.on("tabEditor/toggleAdminPanel", (t) => {
        var e;
        let { tabEditor: s, user: n } = t;
        if (
          n.isAdmin ||
          Al.includes(null === (e = n.profile) || void 0 === e ? void 0 : e.id)
        )
          return {
            tabEditor: Object.assign({}, s, {
              adminPanelOpened: !s.adminPanelOpened,
              adminData: [],
            }),
          };
      }),
      t.on("tabEditor/loadAdminData", async (e, s) => {
        let { user: n } = e,
          { offset: i, limit: o } = s;
        try {
          var r;
          if (
            n.isAdmin ||
            Al.includes(
              null === (r = n.profile) || void 0 === r ? void 0 : r.id
            )
          ) {
            const e = await (async function (t, e) {
              const s = `/api/tab-editor/admin-data?offset=${t}&limit=${e}`,
                n = await fetch(s);
              return ir(n), n.json();
            })(i, o);
            t.dispatch("tabEditor/loadAdminData:done", e);
          }
        } catch (t) {
          console.log(t);
        }
      }),
      t.on("tabEditor/loadAdminData:done", (t, e) => ({
        tabEditor: Object.assign({}, t.tabEditor, { adminData: e }),
      })),
      t.on("tabEditor/loadById", (e, s) => {
        var n;
        const i = e.tabEditor.adminData.find((t) => t.id === s);
        if (
          (e.user.isAdmin ||
            Al.includes(
              null === (n = e.user.profile) || void 0 === n ? void 0 : n.id
            )) &&
          i
        ) {
          const { songId: n, partId: o, revisionId: r } = e.part,
            a = Me(
              { songId: i.songId, artist: "", title: "" },
              i.part,
              i.revision
            );
          t.dispatch("navigate", `${a}?tabedit=${s}`),
            i.songId === n &&
              i.part === o &&
              i.revision === r &&
              Qs(() => t.dispatch("tabEditor/load"));
        }
      });
  },
  Dl = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"),
  Bl = Array.from("1234567890"),
  Fl = [
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
  $l = {
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
function Ul(t) {
  const e = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  return e || "cmd" !== t ? (e && "ctrl" === t ? "cmd" : t) : "ctrl";
}
class zl {
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
    if (this.store.get().consent.view) return;
    if (t.altKey || t.shiftKey || t.metaKey || t.ctrlKey)
      return void this.metaHandler(t);
    if (!this.handlers[t.keyCode] || t.repeat) return;
    if (
      (t.target instanceof HTMLInputElement ||
        t.target instanceof HTMLTextAreaElement) &&
      !t.target.hasAttribute("data-hotkey")
    )
      return;
    const e = this.handlers[t.keyCode],
      s = "function" == typeof e.global && e.global;
    if (e.global) return void s(t);
    const n = this.store.get().route.isPanel;
    if (e.parallel) {
      const s = "function" == typeof e.parallel && e.parallel;
      (n &&
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
        s(t);
    }
    if (n) {
      const s = "function" == typeof e.onPanelPopup && e.onPanelPopup,
        n = "function" == typeof e.onPanel && e.onPanel;
      e.onPanelPopup ? s(t) : e.onPanel && n(t);
    } else {
      const s = "function" == typeof e.onPopup && e.onPopup,
        n = "function" == typeof e.onTab && e.onTab;
      e.onPopup ? s(t) : e.onTab && n(t);
    }
  }
  metaHandler(t) {
    if (
      16 === t.keyCode ||
      17 === t.keyCode ||
      18 === t.keyCode ||
      91 === t.keyCode
    )
      return;
    if (!this.meta[t.keyCode]) return;
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
      if (t.repeat) return void (s.repeat && s.repeat(t));
      const {
        route: { isPanel: e },
        layer: { layer: n },
      } = this.store.get();
      s.onTab ? e || null !== n || s.onTab(t) : s.global && s.global(t);
    }
  }
  bindMeta(t, e) {
    let s =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "global",
      n =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App",
      i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    const [o, r] = t.split("+");
    "shift" === o || "ctrl" === o || "alt" === o || "cmd" === o
      ? ((this.bindSources[`${r}-${o}-${s}`] = n),
        (this.meta[$l[r]] = this.meta[$l[r]] || {}),
        (this.meta[$l[r]][Ul(o)] = this.meta[$l[r]][Ul(o)] || {}),
        (this.meta[$l[r]][Ul(o)][s] = e),
        i && (this.meta[$l[r]][Ul(o)].repeat = Oo(e, 400)))
      : console.error("Please check your meta handler");
  }
  unbindMeta(t) {
    let e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "global",
      s =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    const [n, i] = t.split("+");
    if ("shift" !== n && "ctrl" !== n && "alt" !== n && "cmd" !== n)
      return void console.error("Please check your meta handler");
    const o = this.bindSources[`${i}-${n}-${e}`] === s;
    this.meta[$l[i]] && o && delete this.meta[$l[i]][Ul(n)][e];
  }
  bindOne(t, e, s) {
    let n =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App";
    (this.bindSources[`${t}-${Object.keys(s)[0]}`] = n),
      (this.handlers[$l[t]] = this.handlers[$l[t]] || {}),
      (this.handlers[$l[t]][Object.keys(s)[0]] = e);
  }
  unbindOne(t, e) {
    let s =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    const n = this.bindSources[`${t}-${Object.keys(e)[0]}`] === s;
    this.handlers[$l[t]] && n && delete this.handlers[$l[t]][Object.keys(e)[0]];
  }
  bind(t, e) {
    let s =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        ("keyboard*" === n
          ? Dl.forEach((i) => this.bindOne(i, t[n], e, s))
          : "digits*" === n
          ? Bl.forEach((i) => this.bindOne(i, t[n], e, s))
          : "numpad*" === n
          ? Fl.forEach((i) => this.bindOne(i, t[n], e, s))
          : this.bindOne(n, t[n], e, s));
  }
  unbind(t, e) {
    let s =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        ("keyboard*" === n
          ? Dl.forEach((t) => this.unbindOne(t, e, s))
          : "digits*" === n
          ? Bl.forEach((t) => this.unbindOne(t, e, s))
          : "numpad*" === n
          ? Fl.forEach((t) => this.unbindOne(t, e, s))
          : this.unbindOne(n, e, s));
  }
}
"undefined" == typeof window ||
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
            "function" == typeof e ? () => {} : null;
      window.PASSIVE = !1;
      try {
        const t = Object.defineProperty({}, "passive", {
          get() {
            window.PASSIVE = { passive: !0 };
          },
        });
        window.addEventListener("test", null, t);
      } catch (t) {}
      if (
        ("function" != typeof SVGElement.prototype.focus &&
          (SVGElement.prototype.focus = () => {}),
        "function" != typeof CSSRuleList.prototype[Symbol.iterator] &&
          (CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]),
        "undefined" == typeof console)
      ) {
        const t = () => {};
        console = { error: t, info: t, log: t, warn: t };
      }
      const t = [];
      window.fetch || t.push(import("./fetch.0323f7e9.js")),
        await Promise.all(t);
    })();
    const t =
      ((e = JSON.parse(document.getElementById("state").innerHTML)),
      new Zo(
        [
          W,
          $o,
          pn,
          vr,
          tr,
          Sr,
          Or,
          Ar,
          Cr,
          Ea,
          Ns,
          Ca,
          _a,
          Ua,
          Ga,
          La,
          Ha,
          Xa,
          Ya,
          cc,
          uc,
          pc,
          yc,
          Fa,
          zc,
          Hc,
          qc,
          _c,
          Xc,
          Yc,
          Ml,
          Jc,
          Qc,
          Kc,
          kl,
        ],
        e
      ));
    var e;
    window.Sentry &&
      window.Sentry.onLoad(() => {
        const e = t.get(),
          s = { page: e.route.page };
        for (const t in e.experiments)
          Object.prototype.hasOwnProperty.call(e.experiments, t) &&
            (s["e_" + t] = e.experiments[t]);
        window.Sentry.setTags(s);
      }),
      (window.hotKeysManager = new zl(t)),
      (function (t) {
        const e = new fo({
            onError: function (e) {
              let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
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
    const i = () => {
      const e = (() => {
          if (window) {
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
        n = xr(e),
        i = Ir(e, n, t.get().screen.fullscreen);
      t.dispatch("screen/resize", {
        screen: e,
        landscape: s,
        available: i,
        viewport: n,
      });
    };
    window.addEventListener("resize", To(i, 100)),
      await Promise.resolve(),
      n(
        s(I.Provider, { value: t }, s(Qo, { store: t })),
        document.getElementById("root")
      ),
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
      (function (t) {
        const e = t.get().chords;
        e.current &&
          !e.isFailed &&
          t.dispatch("chords/load:done", {
            songId: e.songId,
            chordsRevisionId: e.chordsRevisionId,
            current: e.current,
          });
      })(t),
      i();
    const o = t.get(),
      r = o,
      a = "bot" === o.device.type,
      c = -1 !== window.location.search.indexOf("ut=on");
    if (
      (a ||
        c ||
        Qs(() =>
          (async function (t) {
            try {
              let e = await (async function () {
                const t = await fetch("/api/screeners/decide", {
                  credentials: "include",
                });
                return ir(t), t.json();
              })();
              const s = t.get();
              (e = e.filter((t) => {
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
          })(t)
        ),
      Qs(() => {
        !(function (t) {
          const e = window.__AMPLITUDE_API_KEY__ || "",
            s = `ampc_${e.slice(0, 6)}`;
          try {
            if ("bot" === t.device.type) return;
            const n = { apiEndpoint: "curiosity.songsterr.com/amplitude" },
              i = (function (t) {
                const e = t + "=",
                  s = document.cookie.split(";");
                for (let t = 0; t < s.length; t++) {
                  let n = s[t];
                  for (; " " === n.charAt(0); ) n = n.substring(1, n.length);
                  if (0 === n.indexOf(e))
                    return n.substring(e.length, n.length);
                }
                return null;
              })(s);
            i && (n.deviceId = i);
            const o = t.user.isLoggedIn ? t.user.profile.id : null;
            window.amplitude.getInstance().init(e, o, n),
              window.amplitude.getInstance().setVersionName(process.env.COMMIT);
          } catch (t) {
            window.Sentry.captureException(t);
          }
        })(t.get());
      }),
      Qs(() => {
        const e = t.get();
        c && t.dispatch("ut/continue", e.query.utName),
          "favorites" !== r.route.page &&
            e.user.isLoggedIn &&
            (!e.favorites.favorites.length && Na(t.dispatch), Da(t.dispatch)),
          t.dispatch("curiosity/visitedPage");
      }),
      Qs(() => {
        if ("search" !== t.get().route.page) {
          const e = {
            instrument: "ALL INSTRUMENTS",
            tunings: { "ALL INSTRUMENTS": "ALL TUNINGS" },
            difficulty: "Any Difficulty",
          };
          t.dispatch("songs/filter", { pattern: "", filters: e });
        }
      }),
      "undefined" != typeof dataLayer &&
        -1 === String(window.location).indexOf("&ut=on"))
    ) {
      let { hasPlus: e, isLoggedIn: s } = t.get().user;
      e = true;
      dataLayer.push({
        event: s ? (e ? "VISITED_PLUS" : "VISITED_FREE") : "VISITED_ANON",
      });
    }
    a ||
      ("off" === t.get().query.sw
        ? (function () {
            try {
              navigator.serviceWorker.ready.then((t) => {
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
              .catch(console.error.bind(console));
          })),
      (window.Cypress || "prod" !== window.__STAGE__) && (window.__store__ = t),
      (window.trackNotsyEvent = (e, s) =>
        "prod" === window.__STAGE__ &&
        t.dispatch("curiosity/event", Object.assign({ event: e }, s)));
    const l = () => t.dispatch("player/resume", "pagehide"),
      d = () => t.dispatch("player/suspend", "pagehide");
    window.addEventListener("pageshow", l, !1),
      window.addEventListener("resume", l, !1),
      window.addEventListener("pagehide", d, !1),
      window.addEventListener("freeze", d, !1),
      "mediaSession" in navigator &&
        (navigator.mediaSession.setActionHandler("play", () => {
          t.dispatch("curiosity/event", { event: "Used media session: play" }),
            t.dispatch("player/togglePlay", !0);
        }),
        navigator.mediaSession.setActionHandler("pause", () => {
          t.dispatch("curiosity/event", { event: "Used media session: pause" }),
            t.dispatch("player/togglePlay", !1);
        }));
  })().catch((t) => {
    console.error(t);
  }));
export {
  gt as $,
  ke as A,
  Te as B,
  wt as C,
  E as D,
  Oe as E,
  Ae as F,
  Ie as G,
  T as H,
  v as I,
  Me as J,
  nt as K,
  j as L,
  Ve as M,
  ht as N,
  mc as O,
  Ps as P,
  Ls as Q,
  Ys as R,
  ys as S,
  Ot as T,
  js as U,
  qs as V,
  I as W,
  fn as X,
  Si as Y,
  fi as Z,
  ms as _,
  as as a,
  Io as a$,
  va as a0,
  dt as a1,
  Bt as a2,
  nn as a3,
  za as a4,
  Rt as a5,
  $e as a6,
  De as a7,
  Fe as a8,
  be as a9,
  vn as aA,
  yn as aB,
  Sn as aC,
  En as aD,
  Wr as aE,
  Fi as aF,
  jo as aG,
  ve as aH,
  Vr as aI,
  qr as aJ,
  Gi as aK,
  $i as aL,
  xn as aM,
  kn as aN,
  In as aO,
  ko as aP,
  Cs as aQ,
  er as aR,
  To as aS,
  Do as aT,
  zi as aU,
  Hi as aV,
  ll as aW,
  dl as aX,
  Lt as aY,
  Qs as aZ,
  bo as a_,
  ye as aa,
  ge as ab,
  fe as ac,
  jr as ad,
  us as ae,
  Be as af,
  We as ag,
  hl as ah,
  He as ai,
  di as aj,
  mn as ak,
  Un as al,
  Nn as am,
  $n as an,
  An as ao,
  Pn as ap,
  On as aq,
  Rn as ar,
  Tn as as,
  Ln as at,
  Cn as au,
  _n as av,
  Er as aw,
  zn as ax,
  wn as ay,
  bn as az,
  ds as b,
  fs as b$,
  xo as b0,
  vo as b1,
  wo as b2,
  So as b3,
  Ro as b4,
  Eo as b5,
  Pl as b6,
  Ll as b7,
  me as b8,
  mo as b9,
  at as bA,
  oa as bB,
  na as bC,
  sa as bD,
  qa as bE,
  hs as bF,
  Gc as bG,
  N as bH,
  ss as bI,
  Wc as bJ,
  R as bK,
  nr as bL,
  cr as bM,
  ir as bN,
  rr as bO,
  or as bP,
  Ia as bQ,
  lr as bR,
  $s as bS,
  ns as bT,
  L as bU,
  Oa as bV,
  xa as bW,
  Rs as bX,
  Aa as bY,
  ps as bZ,
  gs as b_,
  Nt as ba,
  hn as bb,
  Ue as bc,
  Mc as bd,
  yl as be,
  ml as bf,
  Q as bg,
  ua as bh,
  Yr as bi,
  tt as bj,
  da as bk,
  K as bl,
  Z as bm,
  V as bn,
  cs as bo,
  ls as bp,
  J as bq,
  Y as br,
  X as bs,
  ta as bt,
  Zr as bu,
  Jr as bv,
  ha as bw,
  S as bx,
  mt as by,
  ft as bz,
  xs as c,
  Oo as c0,
  ka as c1,
  Ta as c2,
  hc as c3,
  sl as c4,
  nl as c5,
  Va as c6,
  Vs as c7,
  hr as c8,
  pr as c9,
  es as ca,
  ts as cb,
  Pr as cc,
  Lr as cd,
  Ts as d,
  Qo as default,
  Os as e,
  bs as f,
  sr as g,
  ws as h,
  Is as i,
  Ss as j,
  Ac as k,
  yr as l,
  Es as m,
  ks as n,
  vs as o,
  Pt as p,
  At as q,
  rs as r,
  _s as s,
  w as t,
  k as u,
  Pe as v,
  Se as w,
  we as x,
  Ee as y,
  xe as z,
};
//# sourceMappingURL=index.3637aaf7.js.map
