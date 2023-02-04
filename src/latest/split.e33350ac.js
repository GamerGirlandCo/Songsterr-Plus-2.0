import {
  N as e,
  C as t,
  T as s,
  a as i,
  b as c,
  p as l,
  c as a,
  d as n,
  e as r,
  f as p,
  g as o,
} from "./types.3d32913a.js";
let u = {
  "&aacute;": "\xe1",
  "&acirc;": "\xe2",
  "&acute;": "\xb4",
  "&agrave;": "\xe0",
  "&amp;": "&",
  "&ccedil;": "\xe7",
  "&ccirc;": "─ë",
  "&eacute;": "\xe9",
  "&ecirc;": "\xea",
  "&egrave;": "\xe8",
  "&iuml;": "\xef",
};
function h(e) {
  return e.replace(/&.*?;/g, (e) => u[e] || e);
}
let g = `\\[(${e}|${t})\\]`,
  f = /[^ .,'\dXx\/|:;()-]+/;
function x(e, t) {
  for (let n of e.split("\n")) {
    let e = [],
      r = 0;
    for (let t of n.matchAll(g, "g")) {
      let [a, p] = t,
        o = n.substring(r, t.index);
      if (o.length) {
        let t = !f.test(o);
        e.push({ type: t ? s : i, text: h(o) });
      }
      e.push({ type: c, chord: l(p) }), (r = t.index + a.length);
    }
    let p = n.substring(r);
    if (p.length) {
      let t = !f.test(p);
      e.push({ type: t ? s : i, text: h(p) });
    }
    e.length &&
      (e[e.length - 1].type === c && e.push({ type: s, text: "" }),
      t.push({ type: a, line: e }));
  }
}
function m(e, t) {
  let s = 0;
  for (let i of e.matchAll(/{(\w+):?([^}]*)?}/gis)) {
    x(e.substring(s, i.index), t);
    let [c, l, a] = i;
    switch (l) {
      case "tuning":
        t.push({ type: o, text: a.trim() });
        break;
      case "capo":
        t.push({ type: p, text: a.trim() });
        break;
      case "section":
        t.push({ type: r, text: a.trim() });
        break;
      case "c":
      case "comment":
      case "ci":
      case "comment_italic":
      case "gc":
      case "guitar_comment":
        t.push({ type: n, text: a.trim() });
    }
    s = i.index + c.length;
  }
  x(e.substring(s), t);
}
function y(e) {
  e.forEach((e) => {
    if ("line" === e.type && e.line.some((e) => e.type === i)) {
      let t = [];
      e.line.forEach((e) => {
        let s = t[t.length - 1];
        void 0 === s
          ? t.push([e])
          : 1 === s.length
          ? e.type === c
            ? t.push([e])
            : s.push(e)
          : t.push([e]);
      }),
        (e.blocks = t);
    }
  });
}
function d(e) {
  let t = [];
  e = e
    .replace(/{start_of_tab}.*?{end_of_tab}/gis, "")
    .replace(/{sot}.*?{eot}/gis, "")
    .replace(/.*&copy.*\n?/gi, "");
  let s = 0;
  for (let i of e.matchAll(/{start_of_chorus}(.*){end_of_chorus}/gis))
    m(e.substring(s, i.index), t),
      t.push({ type: r, text: "Chorus" }),
      m(i[1], t),
      (s = i.index + i[0].length);
  return m(e.substring(s), t), y(t), t;
}
String.prototype.matchAll ||
  (String.prototype.matchAll = function (e) {
    e = RegExp(e);
    let t = [],
      s = [];
    for (; null !== (t = e.exec(this)); ) s.push(t);
    return s;
  });
export {
  f as CHORD_LINE_NOISE_REGEXP,
  g as LIGHT_CHORD_PATTERN,
  d as split,
  x as splitChords,
  m as splitDirectives,
};
