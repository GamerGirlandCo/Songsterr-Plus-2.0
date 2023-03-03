import {
  v as e,
  p as t,
  b as a,
  T as s,
  x as i,
  q as n,
  h as l,
  F as r,
} from "./preact.294f37c2.js";
import {
  ay as o,
  bM as c,
  u as m,
  bp as p,
  bN as u,
  bO as d,
  bP as h,
  ar as f,
  bQ as g,
  bR as b,
  bS as z,
  bT as y,
  aq as v,
  av as w,
  T as B,
  be as N,
  bU as j,
  L as k,
  b9 as x,
} from "./index.6eeae9f8.js";
import { P as q } from "./Panel.404ed07e.js";
import { T as C, a as T } from "./TocPointer.ba7fd013.js";
import { S as A, s as S } from "./SearchBox.791647c7.js";
import { C as I, S as E } from "./ContinueLink.4b7402ca.js";
import { I as P } from "./Input.9e959f35.js";
import { A as W } from "./ActionButton.5286af2f.js";
import { s as L } from "./user.6707f531.js";
import { _ as F } from "./GenericPanel.module.67ac8ae5.js";
import { g as H } from "./SWW.5ca6aca6.js";
let O = "C4l1mr",
  R = "C4l19e",
  D = "C4l2er",
  Q = { top: "C4l1mr", link: "C4l19e", icon: "C4l2er" },
  V = function () {
    let t =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "#contact-us";
    return e(
      "div",
      { className: Q.top },
      e(
        "a",
        { href: t, className: Q.link },
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
            className: Q.icon,
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
  M = "f71pg f71ae",
  U = "f712u",
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
    T = p(r.current, r.partId, r.revisionId),
    [A, S] = t({ error: null, next: !1, processing: !1 }),
    O = a(),
    R = a(),
    D = a(),
    Q = A.error,
    V = s(
      async (e) => {
        e.preventDefault();
        let t = "",
          a = "",
          s = "";
        try {
          let e = [];
          if (q) (a = C.name), (t = C.email);
          else {
            let s = O.current;
            s && (e.push({ field: s, validator: u }), (a = s.value));
            let i = R.current;
            i && (e.push({ field: i, validator: d }), (t = i.value));
          }
          let r = D.current;
          r && (e.push({ field: r, validator: h }), (s = r.value)),
            f(e),
            S({ error: null, processing: !0, next: !1 });
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
            S({
              error: new y({
                summary: n("Something Went Wrong, please try again later"),
              }),
              processing: !1,
              next: !1,
            });
            return;
          }
          l("curiosity/event", { event: "Submitted feedback form" }),
            S({ processing: !1, error: null, next: !0 });
        } catch (e) {
          S({ error: e, processing: !1, next: !1 });
        }
      },
      [q, C, T]
    ),
    $ = A.next
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
            { noValidate: !0, onSubmit: V },
            e(v, { error: Q }),
            e(P, {
              ref: O,
              name: "name",
              type: "name",
              label: n("Name"),
              placeholder: n("Name"),
              defaultValue: q ? C.name : "",
              autocomplete: "name",
              readonly: q,
              error: Q,
            }),
            e(P, {
              ref: R,
              name: "email",
              type: "email",
              label: n("Email"),
              defaultValue: q ? C.email : "",
              placeholder: n("Email"),
              autocomplete: "email",
              readonly: q,
              error: Q,
            }),
            e(P, {
              ref: D,
              type: "textarea",
              name: "summary",
              label: n("Questions"),
              placeholder: n("How can we help you?"),
              error: Q,
            }),
            e(
              "div",
              { className: J.actions },
              e(W, { title: n("Send"), processing: A.processing }),
              e(I, { className: w.buttonLinkFloat }, n("Cancel"))
            )
          )
        );
  return e(B, null, $);
}
var eo = "/static/media/tabEditor.50842f03.png",
  ec = "/static/media/fingerings.1d631b5e.png",
  em = "/static/media/playlist.c527eaca.gif";
let ep = "Bz21sk",
  eu = "Bz21zt",
  ed = "Bz21vo",
  eh = "Bz22tj",
  ef = "Bz21bp",
  eg = "Bz21bp Bz23j",
  eb = "Bz22tj Bz2da",
  ez = "Bz2135",
  ey = "Bz2bg",
  ev = "Bz2pe",
  ew = "Bz22vj",
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
var eA = eT,
  eS = null,
  eI = null,
  eE = null,
  eP = null,
  eW = null,
  eL = null,
  eF = null,
  eH = null,
  eO = null,
  eR = null,
  eD = [eS, eI, eE, eP, eW, eL, eF, eH, eO, eR];
let eQ = (e, t) =>
  "string" == typeof e
    ? t.test(e)
    : Array.isArray(e)
    ? e.some((e) => eQ(e, t))
    : !!e.props && !!e.props.children && eQ(e.props.children, t);
function eV(t, a, s) {
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
      id: p,
    } = s,
    {
      faq: { content: u, isLoading: d, isError: h },
      dispatch: f,
    } = m("faq"),
    g = n(N),
    { gettext: b } = o(eD);
  l(() => {
    j(g);
  }, []);
  let z = r(() => eV(f, c, u), [u, c, f]),
    y = a(),
    v = a(),
    [w, B] = t(z[0] && z[0].id),
    [I, E] = t(null),
    [P, W] = t(""),
    L = r(() => {
      if (P.length) {
        let e = RegExp(
          P.replace(/[^\w\d ]/gi, "")
            .split(" ")
            .filter((e) => e)
            .map((e) => e.trim())
            .join("|"),
          "i"
        );
        return z
          .map((t) => {
            let a = t.records.filter(
              (t) => e.test(t.question) || eQ(t.answer, e)
            );
            return a.length > 0 ? { ...t, records: a } : null;
          })
          .filter(Boolean);
      }
      return z;
    }, [z, P]),
    F = r(() => (L.length && L.every((e) => e.id !== w) ? L[0].id : w), [L, w]);
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
      i && P ? eA.chosenItem : F === e.id ? eA.chosenItem : eA.item,
    O = L.length && L.find((e) => e.id === F).records.length - L.length,
    R = !i && O > 0 && `margin-bottom:${25 * O}px`;
  return e(
    q,
    { title: b("FAQ"), id: p },
    T("toc"),
    !h &&
      e(
        "div",
        {
          className: eA.searchWrapper,
          onClick: () => (window.location.hash = "toc"),
        },
        e(A, {
          className: S.staticSearch,
          value: P,
          setValue: W,
          isDesktop: !0,
          loading: d,
          inputRef: v,
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
    V("#contact-us"),
    L.length > 0 &&
      e(
        "nav",
        { className: eA.navigation, id: "faq-toc" },
        e(
          "ul",
          { className: eA.menu, ref: y, style: R },
          e(
            "li",
            { className: eA.item },
            e(
              k,
              {
                to: "/a/wa/howtoreadtab",
                "data-link": "how to read tab",
                className: eA.howToReadTab,
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
                  className: eA.submenu,
                  style: `${R ? "display:block; padding: 0;" : ""}`,
                },
                t.records.map((t) =>
                  e(
                    "li",
                    { className: eA.subitem },
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
        className: eA.section,
        itemscope: !0,
        itemtype: "https://schema.org/FAQPage",
      },
      L.map((t) =>
        e(
          "article",
          { className: eA.questions },
          e("h2", { className: eA.sectionTitle }, e("span", null, t.section)),
          e(
            "ul",
            null,
            t.records.map((t) =>
              e(
                "li",
                {
                  className: eA.question,
                  itemscope: !0,
                  itemprop: "mainEntity",
                  itemtype: "https://schema.org/Question",
                },
                e("a", { className: eA.anchor, id: `anchor-${t.id}` }, t.id),
                e(
                  "h3",
                  { className: eA.questionTitle, itemprop: "name" },
                  t.question
                ),
                e(
                  "div",
                  {
                    className: eA.message,
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
          { className: eA.noAnswers, id: "faq-noanswers" },
          b("No answers found")
        ),
      h &&
        e(
          "div",
          { id: "faq-network-error", className: eA.noAnswers },
          b("Sorry, but there are some problems with network."),
          e("br", {}),
          b("Please, try to reload page")
        )
    ),
    e(er, null)
  );
});
export { e$ as default };
