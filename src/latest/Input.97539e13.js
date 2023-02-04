import { a as e, k as a, p as t } from "./preact.3d326435.js";
import { C as r, T as i, bc as s, U as B } from "./index.659fabbf.js";
let l = "Ch52za",
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
function b(a) {
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
  q = "B321u6 B322qb",
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
        type: l,
        name: n,
        error: o,
        defaultValue: u,
        label: m,
        placeholder: f,
        readonly: p,
        autocomplete: d,
      } = a,
      { popup: q, errorStyles: c, onChange: x } = a,
      [h, y] = t(u),
      C = a.error && s(o, n);
    return e(
      "label",
      { className: C ? i.fieldError : i.field },
      q
        ? e(B, { styles: c, errorMessage: C, name: n })
        : e("div", { className: i.hint }, m),
      !q && e(b, { name: n, errorMessage: C }),
      p && e("div", { className: i.readonly, name: n }, u),
      !p &&
        "textarea" === l &&
        e("textarea", {
          name: n,
          placeholder: f,
          onChange: (e) => {
            y(e.target.value), x && x(e);
          },
          className: i.textarea,
          autoComplete: d || "on",
          ref: r,
        }),
      !p &&
        "textarea" !== l &&
        e("input", {
          type: l,
          name: n,
          value: h,
          placeholder: f,
          onChange: (e) => {
            y(e.target.value), x && x(e);
          },
          autoComplete: d || "on",
          className: i.input,
          ref: r,
        })
    );
  });
export { v as I, p as _, b as a, h as f, C as h };
