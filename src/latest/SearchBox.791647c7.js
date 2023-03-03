import { v as e, h as t } from "./preact.294f37c2.js";
import { bV as a, ba as s, b9 as c } from "./index.6eeae9f8.js";
function r(t) {
  let { width: a, height: s, styles: c, fill: r, onClick: i, role: o } = t;
  return e(
    "svg",
    {
      width: a || 18,
      height: s || 18,
      viewBox: "0 0 18 18",
      fill: r,
      onClick: i,
      role: o,
      className: c.iconReset,
    },
    e("circle", { cx: 9, cy: 9, r: 8.15 }),
    e("path", { d: "M11.7 6.3l-5.4 5.4m5.4 0L6.3 6.3" })
  );
}
function i(t) {
  let {
    width: a,
    height: s,
    styles: { icon: c },
  } = t;
  return e(
    "svg",
    { width: a || 20, height: s || 20, viewBox: "0 0 20 20", className: c },
    e("path", {
      d: "M14.84 13.485a8.276 8.276 0 001.804-5.168C16.644 3.727 12.915 0 8.322 0 3.729 0 0 3.727 0 8.317s3.729 8.317 8.322 8.317a8.286 8.286 0 005.177-1.807l4.691 4.854a1.04 1.04 0 001.486.014l.018-.017a1.042 1.042 0 00-.012-1.488l-4.841-4.705zM1.85 8.317a6.473 6.473 0 0112.944 0 6.473 6.473 0 01-12.944 0z",
    })
  );
}
let o = "Cvu1f",
  u = "Cvu1f Cvu49",
  n = "Cvu1qm",
  l = "Cvuvd",
  h = "Cvu2c8",
  v = {
    search: "Cvu1f",
    staticSearch: "Cvu1f Cvu49",
    field: "Cvu1qm",
    iconReset: "Cvuvd",
    icon: "Cvu2c8",
  };
var f = v;
function d(o) {
  let {
      loading: u,
      className: n,
      placeholder: l,
      value: h,
      setValue: v,
      isDesktop: d,
      inputRef: C,
    } = o,
    m = d && a && -1 === window.location.href.indexOf("#");
  m && t(() => C.current.focus(), []);
  let y = u
    ? e(c, { fill: "#777", width: 20, height: 20, className: s.search })
    : e(i, { width: 20, height: 20, styles: f });
  return e(
    "div",
    { className: n || f.search },
    y,
    e("input", {
      autofocus: m,
      className: f.field,
      "data-hotkey": !0,
      type: "text",
      placeholder: l,
      value: h,
      ref: C,
      enterkeyhint: "search",
      onInput: (e) => v(e.currentTarget.value),
      onKeyDown: (e) => 27 === e.keyCode && v(""),
    }),
    h &&
      e(r, {
        styles: f,
        onClick: () => {
          v(""), C.current.focus();
        },
        role: "button",
      })
  );
}
export { d as S, f as s };
