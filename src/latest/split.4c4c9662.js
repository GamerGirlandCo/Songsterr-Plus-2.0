import {
  T as t,
  e,
  R as s,
  S as n,
  J as o,
  a as c,
  o as i,
  w as p,
  V as r,
  n as h,
  H as l,
} from "./types.863fec36.js";
const a = `\\[(${t}|${e})\\]`,
  u = /[^ .,'\dXx\/|:;()-]+/;
function g(t, e) {
  for (const p of t.split("\n")) {
    const t = [];
    let r = 0;
    for (const e of p.matchAll(a, "g")) {
      const [i, h] = e,
        l = p.substring(r, e.index);
      if (l.length) {
        const e = !u.test(l);
        t.push({ type: e ? o : c, text: l });
      }
      t.push({ type: s, chord: n(h) }), (r = e.index + i.length);
    }
    const h = p.substring(r);
    if (h.length) {
      const e = !u.test(h);
      t.push({ type: e ? o : c, text: h });
    }
    t.length &&
      (t[t.length - 1].type === s && t.push({ type: o, text: "" }),
      e.push({ type: i, line: t }));
  }
}
function f(t, e) {
  let s = 0;
  for (const n of t.matchAll(/{(\w+):?([^}]*)?}/gis)) {
    g(t.substring(s, n.index), e);
    const [o, c, i] = n;
    switch (c) {
      case "tuning":
        e.push({ type: l, text: i.trim() });
        break;
      case "capo":
        e.push({ type: h, text: i.trim() });
        break;
      case "section":
        e.push({ type: r, text: i.trim() });
        break;
      case "c":
      case "comment":
      case "ci":
      case "comment_italic":
      case "gc":
      case "guitar_comment":
        e.push({ type: p, text: i.trim() });
    }
    s = n.index + o.length;
  }
  g(t.substring(s), e);
}
function m(t) {
  const e = [];
  t = t
    .replace(/{start_of_tab}.*?{end_of_tab}/gis, "")
    .replace(/{sot}.*?{eot}/gis, "")
    .replace(/.*&copy.*\n?/gi, "");
  let n = 0;
  for (const s of t.matchAll(/{start_of_chorus}(.*){end_of_chorus}/gis))
    f(t.substring(n, s.index), e),
      e.push({ type: r, text: "Chorus" }),
      f(s[1], e),
      (n = s.index + s[0].length);
  return (
    f(t.substring(n), e),
    (function (t) {
      t.forEach((t) => {
        if ("line" === t.type && t.line.some((t) => t.type === c)) {
          const e = [];
          t.line.forEach((t) => {
            const n = e[e.length - 1];
            void 0 === n
              ? e.push([t])
              : 1 === n.length
              ? t.type === s
                ? e.push([t])
                : n.push(t)
              : e.push([t]);
          }),
            (t.blocks = e);
        }
      });
    })(e),
    e
  );
}
String.prototype.matchAll ||
  (String.prototype.matchAll = function (t) {
    t = new RegExp(t);
    let e = [];
    const s = [];
    for (; null !== (e = t.exec(this)); ) s.push(e);
    return s;
  });
export {
  u as CHORD_LINE_NOISE_REGEXP,
  a as LIGHT_CHORD_PATTERN,
  m as split,
  g as splitChords,
  f as splitDirectives,
};
//# sourceMappingURL=split.4c4c9662.js.map
