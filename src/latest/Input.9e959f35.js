import { v as e, k as a, p as t } from "./preact.294f37c2.js";
import { C as r, T as i, bZ as s, aq as l } from "./index.6eeae9f8.js";
let B = "Ch52za",
  n = { message: "Ch52za" },
  o = "B8ixk",
  u = "B8i2pn",
  m = "B8i7t",
  f = "B8i1k6",
  p = {
    exitActive: "B8ixk",
    enterActive: "B8i2pn",
    enter: "B8i7t",
    exit: "B8i1k6",
  };
function q(a) {
  let { errorMessage: t, name: s } = a;
  return e(
    i,
    null,
    t &&
      e(
        r,
        { animationStyles: p, timeout: 150 },
        e("span", { className: n.message, role: "alert", "aria-label": s }, t)
      )
  );
}
let d = "B321u6",
  b = "B321u6 B322qb",
  c = "B321u6 B322qb B322qi",
  x = "B321u6 B322qb B3212y",
  h = "B32qr",
  y = "B32qr B3263",
  C = "B322ir",
  g = {
    base: "B321u6",
    input: "B321u6 B322qb",
    textarea: "B321u6 B322qb B322qi",
    readonly: "B321u6 B322qb B3212y",
    field: "B32qr",
    fieldError: "B32qr B3263",
    hint: "B322ir",
  },
  v = a((a, r) => {
    let i = a.styles || g,
      {
        type: B,
        name: n,
        error: o,
        defaultValue: u,
        label: m,
        placeholder: f,
        readonly: p,
        autocomplete: d,
      } = a,
      { popup: b, errorStyles: c, onChange: x, onKeyDown: h } = a,
      [y, C] = t(u),
      v = a.error && s(o, n);
    return e(
      "label",
      { className: v ? i.fieldError : i.field },
      b
        ? e(l, { styles: c, errorMessage: v, name: n })
        : e("div", { className: i.hint }, m),
      !b && e(q, { name: n, errorMessage: v }),
      p && e("div", { className: i.readonly, name: n }, u),
      !p &&
        "textarea" === B &&
        e("textarea", {
          name: n,
          placeholder: f,
          onChange: (e) => {
            C(e.target.value), x && x(e);
          },
          className: i.textarea,
          autoComplete: d || "on",
          ref: r,
          onKeyDown: (e) => {
            h && h(e);
          },
        }),
      !p &&
        "textarea" !== B &&
        e("input", {
          type: B,
          name: n,
          value: y,
          placeholder: f,
          onChange: (e) => {
            C(e.target.value), x && x(e);
          },
          autoComplete: d || "on",
          className: i.input,
          ref: r,
        })
    );
  });
export { v as I, p as _, q as a, y as b, h as f, C as h };
