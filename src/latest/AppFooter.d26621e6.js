import { _ as e, v as o, x as a, q as s } from "./preact.294f37c2.js";
import {
  aG as r,
  u as t,
  G as l,
  H as n,
  bd as i,
  L as c,
  am as m,
  be as p,
  av as d,
  c as f,
} from "./index.6eeae9f8.js";
var g = "/static/media/plus-showroom-footer.6a04360c.svg";
let h = "ln1lo",
  k = "ln27z",
  y = "ln1js",
  C = { loading: "ln1lo", line: "ln27z", string: "ln1js" };
var u = C;
let v = 3,
  w = 5;
class b extends e {
  render() {
    let e = [, , ,];
    for (let a = 0; a < 3; a++) {
      let s = [, , , , ,];
      for (let e = 0; e < 5; e++)
        s[e] = o("div", { className: u.string, key: e + 1 });
      e[a] = o("div", { className: u.line, key: a + 1 }, s);
    }
    return o("div", { className: u.loading, role: "main" }, e);
  }
}
let N = "Cek21w",
  P = r + " Cek1gy",
  A = r + " Cek1gy Cek2c7",
  S = "Cek20l",
  B = "Cek1yy",
  F = "Cek1lw",
  G = "Ceksv",
  T = "Cek1f0",
  _ = {
    main: "Cek21w",
    showroom: r + " Cek1gy",
    showroomPlusBanner: r + " Cek1gy Cek2c7",
    plusBanner: "Cek20l",
    link: "Cek1yy",
    approom: "Cek1lw",
    plus: "Ceksv",
    banner: "Cek1f0",
  };
var x = "/static/media/download375.0f6fecb1.svg";
let j = a((e) => {
  let { songId: a } = e,
    {
      dispatch: s,
      device: r,
      ads: p,
      isTestMode: d,
    } = t("device", "ads", "isTestMode"),
    f = () => {
      s("curiosity/setConversionProps", {
        "Last referring link": "Footer Banner",
      }),
        s("curiosity/google", {
          category: "Showroom",
          action: "Clicked on Footer Banner",
        });
    },
    h = l(r.os),
    k = n(r.os),
    y = !h && !k;
  if (y) {
    i("tab_page", { isTargeted: !0, page: "tab" });
    let e = p.notsyFailed || d,
      a = e ? _.showroomPlusBanner : _.showroom;
    return o(
      "section",
      { className: _.main, id: "showroom" },
      o(
        "div",
        { className: a, id: "Redesign_ATF_tab_page_728x90" },
        e &&
          o(
            c,
            { className: _.plusBanner, to: "/a/wa/plus", onClick: f },
            o("img", { src: g, alt: "Get Plus" })
          )
      )
    );
  }
  return o(
    "section",
    { className: _.main, id: "showroom" },
    o(
      m,
      {
        source: "bottom_banner",
        attrs: { className: _.link },
        extra: { songId: a },
        eventProperties: {
          Via: "bottom banner",
          "App store": h ? "Google Play" : "App Store",
        },
      },
      o("img", { src: x, className: _.approom, alt: "Download the App" })
    )
  );
});
function D() {
  let e = s(p);
  return o(
    "button",
    {
      className: d.link,
      onClick: () =>
        e.dispatch("consent/view", { suite: "tcf", view: "details" }),
    },
    "Privacy Settings"
  );
}
function L(e) {
  let { withAds: a, device: s, copyright: r, links: t = !0 } = e;
  return o(
    "footer",
    { className: a ? f.footerWithAds : f.footer },
    r &&
      o(
        "div",
        { className: f.copyright, "aria-label": "copyright" },
        "All content on this page is the property of the copyright owner of the original composition"
      ),
    t &&
      o(
        "div",
        { className: f.tos, "aria-label": "terms of service" },
        o(c, { href: "/a/wa/about" }, "About"),
        " | ",
        o(c, { href: "/a/wa/privacy" }, "Privacy Policy"),
        " | ",
        o(c, { href: "/a/wa/terms" }, "Terms Of Service"),
        " | ",
        s.hasGDPR && o(D, null),
        s.hasGDPR && " | ",
        o(c, { href: "/tags" }, "Top Tags "),
        s.hasCCPA && " | ",
        s.hasCCPA &&
          o(
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
export { L as A, b as L, j as S };
