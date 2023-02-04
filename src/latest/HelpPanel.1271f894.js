import {
  a as e,
  p as t,
  _ as a,
  T as s,
  R as i,
  q as n,
  h as l,
  F as r,
} from "./preact.3d326435.js";
import {
  n as o,
  bO as c,
  u as m,
  bw as u,
  bP as p,
  bQ as d,
  bR as h,
  V as f,
  bS as g,
  bT as b,
  bU as z,
  bV as y,
  U as w,
  j as v,
  T as B,
  S as N,
  bW as j,
  L as k,
  k as x,
} from "./index.659fabbf.js";
import { P as q } from "./Panel.693a3a8d.js";
import { T as C, a as T } from "./TocPointer.14f74b88.js";
import { S as S, s as A } from "./SearchBox.3262ea86.js";
import { C as I, S as E } from "./ContinueLink.dee8be95.js";
import { I as W } from "./Input.97539e13.js";
import { A as P } from "./ActionButton.1cbc2cf9.js";
import { s as L } from "./user.15617609.js";
import { _ as F } from "./GenericPanel.module.67ac8ae5.js";
import { g as H } from "./SWW.f49e33a7.js";
let V = "C4l1mr",
  O = "C4l19e",
  R = "C4l2er",
  D = { top: "C4l1mr", link: "C4l19e", icon: "C4l2er" },
  Q = function () {
    let t =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "#contact-us";
    return e(
      "div",
      { className: D.top },
      e(
        "a",
        { href: t, className: D.link },
        e(
          "svg",
          {
            width: 54,
            height: 54,
            viewBox: "0 0 54 54",
            "aria-labelledby": "help-contact-us",
          },
          e(
            "defs",
            null,
            e(
              "filter",
              {
                id: "contact_shadow",
                width: "200%",
                height: "200%",
                x: "-50%",
                y: "-50%",
              },
              e("feGaussianBlur", {
                stdDeviation: 2.1468,
                in: "SourceGraphic",
              }),
              e("feOffset", { dy: 2, result: "contacta" }),
              e("feFlood", { floodColor: "#000000", floodOpacity: 0.15 }),
              e("feComposite", {
                in2: "contacta",
                operator: "in",
                result: "contactb",
              }),
              e("feBlend", {
                in: "SourceGraphic",
                in2: "contactb",
                mode: "normal",
              })
            )
          ),
          e("title", { id: "help-contact-us" }, "Contact Us"),
          e("circle", {
            cx: 27,
            cy: 27,
            r: 20,
            filter: "url(#contact_shadow)",
          }),
          e("path", {
            className: D.icon,
            d: "M36.1 18.5H17.8c-1.2 0-2 .8-2 2v13.1c0 1.1.8 1.9 2 1.9h18.3c1.2 0 2.1-.8 2.1-1.9V20.5c0-1.2-.9-2-2.1-2zm-.1 1.3l-9 8.9-9-8.9h18zM17.1 33.3V20.7l6.3 6.3-6.3 6.3zm.9.9l6.3-6.3 2.2 2.2c.3.3.8.3 1 0l2.1-2.2 6.4 6.3H18zm18.8-.9L30.6 27l6.2-6.3v12.6z",
            "fill-width": 2,
          })
        )
      )
    );
  },
  $ = "f725y",
  G = "f71pg",
  _ = "f71pg f72za",
  U = "f71pg f71ae",
  M = "f712u",
  J = {
    title: "f725y",
    section: "f71pg",
    sectionFeedbackLine: "f71pg f72za",
    sectionDone: "f71pg f71ae",
    actions: "f712u",
  };
var K = null,
  X = null,
  Y = null,
  Z = null,
  ee = null,
  et = null,
  ea = null,
  es = null,
  ei = null,
  en = null,
  el = [K, X, Y, Z, ee, et, ea, es, ei, en];
function er() {
  let { locale: i, gettext: n } = o(el);
  c();
  let {
      dispatch: l,
      meta: r,
      user: N,
      experiments: j,
      device: k,
      store: x,
    } = m("meta", "user", "experiments", "device"),
    { isLoggedIn: q, profile: C } = N,
    T = u(r.current, r.partId, r.revisionId),
    [S, A] = t({ error: null, next: !1, processing: !1 }),
    V = a(),
    O = a(),
    R = a(),
    D = S.error,
    Q = s(
      async (e) => {
        e.preventDefault();
        let t = "",
          a = "",
          s = "";
        try {
          let e = [];
          if (q) (a = C.name), (t = C.email);
          else {
            let s = V.current;
            s && (e.push({ field: s, validator: p }), (a = s.value));
            let i = O.current;
            i && (e.push({ field: i, validator: d }), (t = i.value));
          }
          let r = R.current;
          r && (e.push({ field: r, validator: h }), (s = r.value)),
            f(e),
            A({ error: null, processing: !0, next: !1 });
          let o = {
            page: g(T),
            productName: "SRW",
            "Operating System": k.os.name,
            DeviceType: k.type,
            Useragent: window.navigator && window.navigator.userAgent,
            "Sentry Last Event Id": H(),
            Locale: i,
          };
          try {
            let { getDeviceId: e } = await b(x.get());
            o.Amplitude = `https://analytics.amplitude.com/demax-inc/project/308889/search/${e()}`;
          } catch (e) {}
          for (let e in ((o.Plan = q ? C.plan : z.FREE), Object.keys(j)))
            j[e]?.status === "active" &&
              (o[`Experiment: ${e}`] = j[e]?.segment);
          let c = await L({
            name: a,
            subject: "message from website",
            email: t,
            message: s,
            properties: o,
          });
          if (!c.ok) {
            A({
              error: new y({
                summary: n("Something Went Wrong, please try again later"),
              }),
              processing: !1,
              next: !1,
            });
            return;
          }
          l("curiosity/event", { event: "Submitted feedback form" }),
            A({ processing: !1, error: null, next: !0 });
        } catch (e) {
          A({ error: e, processing: !1, next: !1 });
        }
      },
      [q, C, T]
    ),
    $ = S.next
      ? e(
          E,
          { key: "done", className: J.sectionDone, "data-section": "done" },
          e("h4", { className: F.title }, n("Thanks for reaching out!")),
          e("h5", { className: F.subtitle }, n("We will get back to you soon")),
          e(I, {}, n("Close"))
        )
      : e(
          E,
          {
            key: "help",
            className: J.sectionFeedbackLine,
            "data-section": "form",
          },
          e(
            "h2",
            { className: J.title, id: "contact-us" },
            n("Have\xa0not\xa0found the\xa0answer? Write\xa0to\xa0us!")
          ),
          e(
            "form",
            { noValidate: !0, onSubmit: Q },
            e(w, { error: D }),
            e(W, {
              ref: V,
              name: "name",
              type: "name",
              label: n("Name"),
              placeholder: n("Name"),
              defaultValue: q ? C.name : "",
              autocomplete: "name",
              readonly: q,
              error: D,
            }),
            e(W, {
              ref: O,
              name: "email",
              type: "email",
              label: n("Email"),
              defaultValue: q ? C.email : "",
              placeholder: n("Email"),
              autocomplete: "email",
              readonly: q,
              error: D,
            }),
            e(W, {
              ref: R,
              type: "textarea",
              name: "summary",
              label: n("Questions"),
              placeholder: n("How can we help you?"),
              error: D,
            }),
            e(
              "div",
              { className: J.actions },
              e(P, { title: n("Send"), processing: S.processing }),
              e(I, { className: v.buttonLinkFloat }, n("Cancel"))
            )
          )
        );
  return e(B, null, $);
}
var eo = "/static/media/tabEditor.50842f03.png",
  ec = "/static/media/fingerings.1d631b5e.png",
  em = "/static/media/playlist.c527eaca.gif";
let eu = "Bz21sk",
  ep = "Bz21zt",
  ed = "Bz21vo",
  eh = "Bz22tj",
  ef = "Bz21bp",
  eg = "Bz21bp Bz23j",
  eb = "Bz22tj Bz2da",
  ez = "Bz2135",
  ey = "Bz2bg",
  ew = "Bz2pe",
  ev = "Bz22vj",
  eB = "Bz28b",
  eN = "Bz24n",
  ej = "Bz2za",
  ek = "Bz24n Bz22rv",
  ex = "Bz21uz",
  eq = "Bz22oj",
  eC = "Bz22jo",
  eT = {
    navigation: "Bz21sk",
    section: "Bz21zt",
    searchWrapper: "Bz21vo",
    question: "Bz22tj",
    questions: "Bz21bp",
    bluredQuestions: "Bz21bp Bz23j",
    chosenQuestion: "Bz22tj Bz2da",
    sectionTitle: "Bz2135",
    noAnswers: "Bz2bg",
    questionTitle: "Bz2pe",
    message: "Bz22vj",
    menu: "Bz28b",
    item: "Bz24n",
    submenu: "Bz2za",
    chosenItem: "Bz24n Bz22rv",
    subitem: "Bz21uz",
    anchor: "Bz22oj",
    howToReadTab: "Bz22jo",
  };
var eS = eT,
  eA = null,
  eI = null,
  eE = null,
  eW = null,
  eP = null,
  eL = null,
  eF = null,
  eH = null,
  eV = null,
  eO = null,
  eR = [eA, eI, eE, eW, eP, eL, eF, eH, eV, eO];
let eD = (e, t) =>
  "string" == typeof e
    ? t.test(e)
    : Array.isArray(e)
    ? e.some((e) => eD(e, t))
    : !!e.props && !!e.props.children && eD(e.props.children, t);
function eQ(t, a, s) {
  return void 0 === s
    ? []
    : s &&
        s.map((s) => ({
          ...s,
          records: s.records.map((s) => ({
            ...s,
            answer: s.answer.map((s) =>
              (function s(i) {
                if (null === i) return "";
                if (Array.isArray(i)) return i.map((e) => s(e));
                if ("string" == typeof i) return i;
                if (i.tag) {
                  let n = {};
                  if ("a" === i.tag) {
                    if (i.attrs.href?.includes("ut:")) {
                      let [, n] = i.attrs.href.split(":");
                      return e(
                        "a",
                        {
                          ...i.attrs,
                          onClick: (e) => {
                            e.preventDefault(),
                              t("navigate", a),
                              t("ut/feedbackLoad", n);
                          },
                        },
                        s(i.children)
                      );
                    }
                    if (
                      i.attrs.href &&
                      (i.attrs.href.endsWith("/?redesign=off") ||
                        "_blank" === i.attrs.target)
                    )
                      return e("a", { ...i.attrs }, s(i.children));
                    if (i.attrs.href && i.attrs.href.startsWith("/"))
                      return e(k, { ...i.attrs }, s(i.children));
                    n = { rel: "noopener noreferrer", target: "_blank" };
                  }
                  return e(`${i.tag}`, { ...i.attrs, ...n }, s(i.children));
                }
              })(s)
            ),
          })),
        }));
}
var e$ = i((s) => {
  let {
      device: { isPhone: i },
      songUrl: c,
      id: u,
    } = s,
    {
      faq: { content: p, isLoading: d, isError: h },
      dispatch: f,
    } = m("faq"),
    g = n(N),
    { gettext: b } = o(eR);
  l(() => {
    j(g);
  }, []);
  let z = r(() => eQ(f, c, p), [p, c, f]),
    y = a(),
    w = a(),
    [v, B] = t(z[0] && z[0].id),
    [I, E] = t(null),
    [W, P] = t(""),
    L = r(() => {
      if (W.length) {
        let e = RegExp(
          W.replace(/[^\w\d ]/gi, "")
            .split(" ")
            .filter((e) => e)
            .map((e) => e.trim())
            .join("|"),
          "i"
        );
        return z
          .map((t) => {
            let a = t.records.filter(
              (t) => e.test(t.question) || eD(t.answer, e)
            );
            return a.length > 0 ? { ...t, records: a } : null;
          })
          .filter(Boolean);
      }
      return z;
    }, [z, W]),
    F = r(() => (L.length && L.every((e) => e.id !== v) ? L[0].id : v), [L, v]);
  l(() => {
    if (z.length) {
      let e = window.location.hash && window.location.hash.replace("#", "");
      if (e) {
        let t = document.getElementById(`anchor-${e}`);
        if (t) {
          t.scrollIntoView({ behavior: "smooth" }),
            t.parentElement.classList.add("blink");
          let e = setTimeout(() => {
            t && t.parentElement && t.parentElement.classList.remove("blink");
          }, 2e3);
          return () => clearTimeout(e);
        }
      }
    }
  }, [L, I]);
  let H = (e) =>
      i && W ? eS.chosenItem : F === e.id ? eS.chosenItem : eS.item,
    V = L.length && L.find((e) => e.id === F).records.length - L.length,
    O = !i && V > 0 && `margin-bottom:${25 * V}px`;
  return e(
    q,
    { title: b("FAQ"), id: u },
    T("toc"),
    !h &&
      e(
        "div",
        {
          className: eS.searchWrapper,
          onClick: () => (window.location.hash = "toc"),
        },
        e(S, {
          className: A.staticSearch,
          value: W,
          setValue: P,
          isDesktop: !0,
          loading: d,
          inputRef: w,
          placeholder: b("How can we help?"),
        })
      ),
    d &&
      e(x, {
        id: "faq-loader",
        fill: "#777",
        width: 35,
        height: 35,
        style: { margin: "30px auto" },
      }),
    C("HelpPanel", "#toc"),
    Q("#contact-us"),
    L.length > 0 &&
      e(
        "nav",
        { className: eS.navigation, id: "faq-toc" },
        e(
          "ul",
          { className: eS.menu, ref: y, style: O },
          e(
            "li",
            { className: eS.item },
            e(
              k,
              {
                to: "/a/wa/howtoreadtab",
                "data-link": "how to read tab",
                className: eS.howToReadTab,
              },
              b("How to Read a Tab")
            )
          ),
          L.map((t) =>
            e(
              "li",
              { className: H(t), id: t.id },
              e("button", { onClick: () => B(t.id) }, t.section),
              e(
                "ul",
                {
                  className: eS.submenu,
                  style: `${O ? "display:block; padding: 0;" : ""}`,
                },
                t.records.map((t) =>
                  e(
                    "li",
                    { className: eS.subitem },
                    e(
                      "a",
                      { href: "#" + t.id, onClick: () => E(t.id) },
                      t.question
                    )
                  )
                )
              )
            )
          )
        )
      ),
    e(
      "section",
      {
        "data-section": "qa",
        className: eS.section,
        itemscope: !0,
        itemtype: "https://schema.org/FAQPage",
      },
      L.map((t) =>
        e(
          "article",
          { className: eS.questions },
          e("h2", { className: eS.sectionTitle }, e("span", null, t.section)),
          e(
            "ul",
            null,
            t.records.map((t) =>
              e(
                "li",
                {
                  className: eS.question,
                  itemscope: !0,
                  itemprop: "mainEntity",
                  itemtype: "https://schema.org/Question",
                },
                e("a", { className: eS.anchor, id: `anchor-${t.id}` }, t.id),
                e(
                  "h3",
                  { className: eS.questionTitle, itemprop: "name" },
                  t.question
                ),
                e(
                  "div",
                  {
                    className: eS.message,
                    itemscope: !0,
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer",
                  },
                  e("div", { itemProp: "text" }, t.answer),
                  "How to use the Tab editor?" === t.question &&
                    e("img", {
                      src: eo,
                      width: 390,
                      height: 174,
                      loading: "lazy",
                      alt: "Markup demo",
                      itemprop: "image",
                      itemscope: !0,
                      itemtype: "https://schema.org/ImageObject",
                    }),
                  'What is the "Guitar Fingering" beta?' === t.question &&
                    e("img", {
                      src: ec,
                      width: 485,
                      height: 120,
                      loading: "lazy",
                      alt: "Fingerings demo",
                      itemprop: "image",
                      itemscope: !0,
                      itemtype: "https://schema.org/ImageObject",
                    }),
                  "Can I organize my Favorites into playlists? " ===
                    t.question &&
                    e("img", {
                      src: em,
                      width: 463,
                      height: 246,
                      loading: "lazy",
                      alt: "Playlist demo",
                      itemprop: "image",
                      itemscope: !0,
                      itemtype: "https://schema.org/ImageObject",
                    })
                )
              )
            )
          )
        )
      ),
      !h &&
        !d &&
        !L.length &&
        e(
          "div",
          { className: eS.noAnswers, id: "faq-noanswers" },
          b("No answers found")
        ),
      h &&
        e(
          "div",
          { id: "faq-network-error", className: eS.noAnswers },
          b("Sorry, but there are some problems with network."),
          e("br", {}),
          b("Please, try to reload page")
        )
    ),
    e(er, null)
  );
});
export { e$ as default };
