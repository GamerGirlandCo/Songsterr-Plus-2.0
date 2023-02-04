import {
  d as e,
  a as a,
  R as o,
  p as s,
  h as r,
  q as t,
} from "./preact.3d326435.js";
import {
  p as n,
  u as i,
  i as l,
  d as c,
  f as m,
  L as p,
  A as d,
  S as u,
  j as h,
  c as f,
} from "./index.659fabbf.js";
var g = "/static/media/plus-showroom-footer.6a04360c.svg";
let y = "ln1lo",
  k = "ln27z",
  v = "ln1js",
  w = { loading: "ln1lo", line: "ln27z", string: "ln1js" };
var N = w;
let C = 3,
  b = 5;
class _ extends e {
  render() {
    let e = [, , ,];
    for (let o = 0; o < 3; o++) {
      let s = [, , , , ,];
      for (let e = 0; e < 5; e++)
        s[e] = a("div", { className: N.string, key: e + 1 });
      e[o] = a("div", { className: N.line, key: o + 1 }, s);
    }
    return a("div", { className: N.loading, role: "main" }, e);
  }
}
let P = "Cek21w",
  A = n + " Cek1gy",
  B = n + " Cek1gy Cek2c7",
  F = "Cek20l",
  x = "Cek1yy",
  S = "Cek1lw",
  T = "Ceksv",
  R = "Cek1f0",
  j = {
    main: "Cek21w",
    showroom: n + " Cek1gy",
    showroomPlusBanner: n + " Cek1gy Cek2c7",
    plusBanner: "Cek20l",
    link: "Cek1yy",
    approom: "Cek1lw",
    plus: "Ceksv",
    banner: "Cek1f0",
  };
var D = "/static/media/download375.24c25080.svg",
  G = "/static/media/download375alt.3ed1c179.svg";
let L = o((e) => {
    let o,
      { songId: t } = e,
      {
        dispatch: n,
        device: u,
        ads: h,
        experiments: f,
        isTestMode: y,
      } = i("device", "ads", "experiments", "isTestMode"),
      k = () => {
        n("curiosity/setConversionProps", {
          "Last referring link": "Footer Banner",
        }),
          n("curiosity/google", {
            category: "Showroom",
            action: "Clicked on Footer Banner",
          });
      },
      v = l(u.os),
      w = c(u.os),
      N = !v && !w;
    if (N) {
      m("tab_page", { isTargeted: !0, page: "tab" });
      let e = h.notsyFailed || y,
        o = e ? j.showroomPlusBanner : j.showroom;
      return a(
        "section",
        { className: j.main, id: "showroom" },
        a(
          "div",
          { className: o, id: "Redesign_ATF_tab_page_728x90" },
          e &&
            a(
              p,
              { className: j.plusBanner, to: "/a/wa/plus", onClick: k },
              a("img", { src: g, alt: "Get Plus" })
            )
        )
      );
    }
    let [C, b] = s({ original: !0, src: D, isFirstRun: !0 });
    return (
      r(() => {
        if (f.learn_faster_app_banner_v2) {
          let e = "on" === f.learn_faster_app_banner_v2.segment;
          if (!e && !C.isFirstRun) return;
          setTimeout(() => {
            let a = !e || !C.original,
              o = a ? D : G;
            f.learn_faster_app_banner_v2?.status === "pending" &&
              n("experiments/activate", {
                experimentName: "learn_faster_app_banner_v2",
              }),
              b({ original: a, src: o, isFirstRun: !1 });
          }, 2e4);
        }
        return () => o;
      }, [n, C, f]),
      a(
        "section",
        { className: j.main, id: "showroom" },
        a(
          d,
          {
            source: "bottom_banner",
            attrs: { className: j.link },
            extra: { songId: t },
            eventProperties: {
              Via: "bottom banner",
              "App store": v ? "Google Play" : "App Store",
              Text: C.original ? "download" : "learn tabs",
            },
          },
          a("img", {
            src: C.src,
            className: j.approom,
            alt: "Download the App",
          })
        )
      )
    );
  }),
  z = "Bho10o",
  E = "Bho1s0",
  M = "Bho1fy",
  I = { error: "Bho10o", title: "Bho1s0", subtitle: "Bho1fy" };
function O() {
  return a(
    "div",
    { className: I.error },
    a("h1", { className: I.title }, a("span", null, "Page Not Found!")),
    a(
      "h2",
      { className: I.subtitle },
      "Please try ",
      a(p, { to: "/" }, "searching"),
      " for the song you need."
    )
  );
}
function V() {
  let { dispatch: e } = i();
  return (
    r(() => e("curiosity/error", { error: "Network" }), []),
    a(
      "div",
      { className: I.error },
      a("h1", { className: I.title }, a("span", null, "Network Error")),
      a(
        "h2",
        { className: I.subtitle },
        "Please, check your network connection and try again."
      )
    )
  );
}
function W() {
  let e = t(u);
  return a(
    "button",
    {
      className: h.link,
      onClick: () =>
        e.dispatch("consent/view", { suite: "tcf", view: "details" }),
    },
    "Privacy Settings"
  );
}
function q(e) {
  let { withAds: o, device: s, copyright: r, links: t = !0 } = e;
  return a(
    "footer",
    { className: o ? f.footerWithAds : f.footer },
    r &&
      a(
        "div",
        { className: f.copyright, "aria-label": "copyright" },
        "All content on this page is the property of the copyright owner of the original composition"
      ),
    t &&
      a(
        "div",
        { className: f.tos, "aria-label": "terms of service" },
        a(p, { href: "/a/wa/about" }, "About"),
        " | ",
        a(p, { href: "/a/wa/privacy" }, "Privacy Policy"),
        " | ",
        a(p, { href: "/a/wa/terms" }, "Terms Of Service"),
        " | ",
        s.hasGDPR && a(W, null),
        s.hasGDPR && " | ",
        a(p, { href: "/tags" }, "Top Tags "),
        s.hasCCPA && " | ",
        s.hasCCPA &&
          a(
            "a",
            {
              href: "/a/wa/do-not-sell-my-personal-information",
              rel: "nofollow",
            },
            "Do Not Sell My Personal Information"
          )
      )
  );
}
export { q as A, _ as L, O as N, L as S, V as a };
