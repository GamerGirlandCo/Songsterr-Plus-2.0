import {
  q as e,
  r as a,
  s as s,
  t as r,
  v as t,
  w as l,
  x as n,
  u as i,
  h as c,
  c as o,
} from "./index.659fabbf.js";
import { o as d, a as h } from "./preact.3d326435.js";
import {
  N as p,
  a as g,
  A as m,
  L as f,
  S as N,
} from "./AppFooter.ff6007e1.js";
import { S as u } from "./SWW.f49e33a7.js";
let v = "C27i",
  C = "C2x4",
  x = "C22f1",
  y = "C21dc",
  F = e + " " + a + " C21oy",
  w = e + " " + a + " C2200",
  P = "C24a",
  T = "C22rm",
  b = {
    content: "C27i",
    tags: "C2x4",
    songs: "C22f1",
    nav: "C21dc",
    prev: e + " " + a + " C21oy",
    next: e + " " + a + " C2200",
    header: "C24a",
    title: "C22rm",
  };
function j(e) {
  let { content: a, route: i } = e;
  return "tag" === i.page
    ? d("div", {
        className: b.songs,
        children: [
          d("header", {
            className: b.header,
            children: d("h1", {
              className: b.title,
              children: [
                "Top " + (a?.tag || "") + " Tabs",
                !!a?.page && d("span", { children: " Page " + a.page }, "page"),
              ],
            }),
          }),
          d("div", {
            className: b.content,
            children: a?.songs.map((e) =>
              [
                e.hasPlayer &&
                  d(
                    "a",
                    { href: s(e, 0), children: e.title + " Tab" },
                    "player"
                  ),
                e.hasChords &&
                  d("a", { href: r(e), children: e.title + " Chords" }, "tags"),
              ].filter(Boolean)
            ),
          }),
          d("div", {
            className: b.nav,
            children: [
              a?.page >= 1 &&
                d("a", {
                  className: b.prev,
                  rel: "prev",
                  href: t(a.tag, a.page - 1),
                  children: "Prev page",
                }),
              a?.hasNext &&
                d("a", {
                  className: b.next,
                  rel: "next",
                  href: t(a.tag, a.page + 1),
                  children: "Next page",
                }),
            ],
          }),
        ],
      })
    : d("div", {
        className: b.tags,
        children: [
          d("header", {
            className: b.header,
            children: d("h1", {
              className: b.title,
              children: [
                "Top Tags",
                !!a?.page && d("span", { children: " Page " + a.page }, "page"),
              ],
            }),
          }),
          d("div", {
            className: b.content,
            children: a?.tags.map((e) =>
              d("a", { href: t(e.name), children: l(e.name) })
            ),
          }),
          d("div", {
            className: b.nav,
            children: [
              a?.page >= 1 &&
                d("a", {
                  className: b.prev,
                  rel: "prev",
                  href: n(a.page - 1),
                  children: "Prev page",
                }),
              a?.hasNext &&
                d("a", {
                  className: b.next,
                  rel: "next",
                  href: n(a.page + 1),
                  children: "Next page",
                }),
            ],
          }),
        ],
      });
}
function A(e) {
  let { tags: a } = e;
  if (!a.loading) {
    if (a.isNotFound) return h(p, null);
    if (a.isNetworkFailed || a.isNetworkFailed) return h(g, null);
    if (a.isFailed || a.isFailed) return h(u, null);
  }
}
function k() {
  let {
      device: e,
      route: a,
      tags: s,
      user: r,
    } = i("device", "route", "tags", "user"),
    t = c(r),
    l = s.loading,
    n = !s.isFailed,
    d = n && !l && !t && !l,
    p = n && !l && !!s.content;
  return h(
    "section",
    { className: o.tablature, role: a.isPanel ? "complementary" : "main" },
    h(A, { tags: s }),
    d &&
      h(
        "section",
        { className: o.showroom },
        h(N, { key: "tags-showroom", songId: 27 })
      ),
    l && h(f, null),
    p && h(j, { content: s.content, route: s.route }),
    p && h(m, { withAds: d, device: e, copyright: !1 })
  );
}
export { k as default };
