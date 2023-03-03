import {
  d as e,
  f as a,
  i as s,
  j as r,
  k as t,
  p as l,
  m as n,
  u as i,
  h as c,
  c as o,
} from "./index.6eeae9f8.js";
import { o as d, v as h } from "./preact.294f37c2.js";
import { A as p, L as g, S as m } from "./AppFooter.d26621e6.js";
import { N as f, a as N } from "./NetworkError.a663a2cf.js";
import { S as u } from "./SWW.5ca6aca6.js";
let C = "C27i",
  v = "C2x4",
  x = "C22f1",
  y = "C21dc",
  F = e + " " + a + " C21oy",
  j = e + " " + a + " C2200",
  w = "C24a",
  P = "C22rm",
  T = {
    content: "C27i",
    tags: "C2x4",
    songs: "C22f1",
    nav: "C21dc",
    prev: e + " " + a + " C21oy",
    next: e + " " + a + " C2200",
    header: "C24a",
    title: "C22rm",
  };
function k(e) {
  let { content: a, route: i } = e;
  return "tag" === i.page
    ? d("div", {
        className: T.songs,
        children: [
          d("header", {
            className: T.header,
            children: d("h1", {
              className: T.title,
              children: [
                "Top " + (a?.tag || "") + " Tabs",
                !!a?.page && d("span", { children: " Page " + a.page }, "page"),
              ],
            }),
          }),
          d("div", {
            className: T.content,
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
            className: T.nav,
            children: [
              a?.page >= 1 &&
                d("a", {
                  className: T.prev,
                  rel: "prev",
                  href: t(a.tag, a.page - 1),
                  children: "Prev page",
                }),
              a?.hasNext &&
                d("a", {
                  className: T.next,
                  rel: "next",
                  href: t(a.tag, a.page + 1),
                  children: "Next page",
                }),
            ],
          }),
        ],
      })
    : d("div", {
        className: T.tags,
        children: [
          d("header", {
            className: T.header,
            children: d("h1", {
              className: T.title,
              children: [
                "Top Tags",
                !!a?.page && d("span", { children: " Page " + a.page }, "page"),
              ],
            }),
          }),
          d("div", {
            className: T.content,
            children: a?.tags.map((e) =>
              d("a", { href: t(e.name), children: l(e.name) })
            ),
          }),
          d("div", {
            className: T.nav,
            children: [
              a?.page >= 1 &&
                d("a", {
                  className: T.prev,
                  rel: "prev",
                  href: n(a.page - 1),
                  children: "Prev page",
                }),
              a?.hasNext &&
                d("a", {
                  className: T.next,
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
    if (a.isNotFound) return h(f, null);
    if (a.isNetworkFailed || a.isNetworkFailed) return h(N, null);
    if (a.isFailed || a.isFailed) return h(u, null);
  }
}
function b() {
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
    f = n && !l && !!s.content;
  return h(
    "section",
    { className: o.tablature, role: a.isPanel ? "complementary" : "main" },
    h(A, { tags: s }),
    d &&
      h(
        "section",
        { className: o.showroom },
        h(m, { key: "tags-showroom", songId: 27 })
      ),
    l && h(g, null),
    f && h(k, { content: s.content, route: s.route }),
    f && h(p, { withAds: d, device: e, copyright: !1 })
  );
}
export { b as default };
